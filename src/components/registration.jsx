import { useState } from 'react';
import './registration.css';

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [registrationType, setRegistrationType] = useState('');

  // Individual state
  const [individualData, setIndividualData] = useState({
    name: '',
    email: '',
    phone: '',
    rollNo: '',
  });

  // Team state
  const [teamName, setTeamName] = useState('');
  const [leader, setLeader] = useState({
    name: '',
    email: '',
    phone: '',
    rollNo: '',
  });
  const [teamMembers, setTeamMembers] = useState([]);

  // Add/remove team members
  const handleAddMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([
        ...teamMembers,
        { name: '', email: '', phone: '', rollNo: '' },
      ]);
    }
  };

  const handleRemoveMember = (index) => {
    const updated = [...teamMembers];
    updated.splice(index, 1);
    setTeamMembers(updated);
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleRegistrationChange = (value) => {
    setRegistrationType(value);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (activeTab === 'individual') {
        await addDoc(collection(db, 'individual_registrations'), {
          registrationType,
          ...individualData,
          timestamp: new Date(),
        });
        console.log('✅ Individual registration submitted');
      } else if (activeTab === 'team') {
        await addDoc(collection(db, 'team_registrations'), {
          registrationType,
          teamName,
          leader,
          members: teamMembers,
          timestamp: new Date(),
        });
        console.log('✅ Team registration submitted');
      }
  
      // Reset form after submission
      setIndividualData({ name: '', email: '', phone: '', rollNo: '' });
      setTeamName('');
      setLeader({ name: '', email: '', phone: '', rollNo: '' });
      setTeamMembers([]);
      setRegistrationType('');
      alert('Registration successful!');
    } catch (error) {
      console.error('❌ Error submitting registration:', error);
      alert('Failed to register. Please try again.');
    }
  };
  

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-layout">
          {/* Left Branding */}
          <div
            className="branding-section"
            style={{
              backgroundImage: registrationType
                ? `url(${
                    registrationType === 'UEFA'
                      ? '/uefa.webp'
                      : registrationType === 'IPL'
                      ? '/auction.jpg'
                      : '/uefatrophi.jpg'
                  })`
                : '',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="branding-overlay">
              <h1 className="branding-title">
                {registrationType ? '' : 'REGISTER yourself'}
              </h1>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="form-section">
            {/* Tabs */}
            <div className="form-tabs">
              <button
                className={`tab-button ${
                  activeTab === 'individual' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('individual')}
              >
                Individual
              </button>
              <button
                className={`tab-button ${
                  activeTab === 'team' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('team')}
              >
                Team
              </button>
            </div>

            {/* Individual Form */}
            {activeTab === 'individual' && (
              <form className="form-content" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Name</label>
                  <input
                    type="text"
                    value={individualData.name}
                    onChange={(e) =>
                      setIndividualData({ ...individualData, name: e.target.value })
                    }
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={individualData.email}
                    onChange={(e) =>
                      setIndividualData({ ...individualData, email: e.target.value })
                    }
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={individualData.phone}
                    onChange={(e) =>
                      setIndividualData({ ...individualData, phone: e.target.value })
                    }
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-field">
                  <label>Roll No</label>
                  <input
                    type="text"
                    value={individualData.rollNo}
                    onChange={(e) =>
                      setIndividualData({ ...individualData, rollNo: e.target.value })
                    }
                    required
                    placeholder="Enter your roll number"
                  />
                </div>
                <div className="form-field">
                  <label>Registration For</label>
                  <select
                    className="dropdown"
                    value={registrationType}
                    onChange={(e) => handleRegistrationChange(e.target.value)}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="UEFA">UEFA</option>
                    <option value="IPL">IPL</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            )}

            {/* Team Form */}
            {activeTab === 'team' && (
              <form className="form-content" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                    placeholder="Enter team name"
                  />
                </div>

                <h3 className="section-title">Team Leader Details</h3>
                <div className="form-field">
                  <label>Name</label>
                  <input
                    type="text"
                    value={leader.name}
                    onChange={(e) =>
                      setLeader({ ...leader, name: e.target.value })
                    }
                    required
                    placeholder="Enter leader name"
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={leader.email}
                    onChange={(e) =>
                      setLeader({ ...leader, email: e.target.value })
                    }
                    required
                    placeholder="Enter leader email"
                  />
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={leader.phone}
                    onChange={(e) =>
                      setLeader({ ...leader, phone: e.target.value })
                    }
                    required
                    placeholder="Enter leader phone"
                  />
                </div>
                <div className="form-field">
                  <label>Roll No</label>
                  <input
                    type="text"
                    value={leader.rollNo}
                    onChange={(e) =>
                      setLeader({ ...leader, rollNo: e.target.value })
                    }
                    required
                    placeholder="Enter leader roll no"
                  />
                </div>
                <div className="form-field">
                  <label>Registration For</label>
                  <select
                    className="dropdown"
                    value={registrationType}
                    onChange={(e) => handleRegistrationChange(e.target.value)}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="UEFA">UEFA</option>
                    <option value="IPL">IPL</option>
                  </select>
                </div>

                <div className="team-members-section">
                  <div className="team-members-header">
                    <h3 className="section-title">Team Members</h3>
                    {teamMembers.length < 4 && (
                      <button
                        type="button"
                        onClick={handleAddMember}
                        className="add-member-button"
                      >
                        Add Member
                      </button>
                    )}
                  </div>
                  {teamMembers.length === 0 && (
                    <p className="no-members-text">
                      No team members added yet. You can add up to 4 members.
                    </p>
                  )}
                  {teamMembers.map((member, index) => (
                    <div key={index} className="member-card">
                      <div className="member-header">
                        <h4>Member {index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          className="remove-button"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="member-fields">
                        <div className="form-field">
                          <label>Name</label>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) =>
                              handleMemberChange(index, 'name', e.target.value)
                            }
                            placeholder="Enter name"
                          />
                        </div>
                        <div className="form-field">
                          <label>Email</label>
                          <input
                            type="email"
                            value={member.email}
                            onChange={(e) =>
                              handleMemberChange(index, 'email', e.target.value)
                            }
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-field">
                          <label>Phone</label>
                          <input
                            type="tel"
                            value={member.phone}
                            onChange={(e) =>
                              handleMemberChange(index, 'phone', e.target.value)
                            }
                            placeholder="Enter phone"
                          />
                        </div>
                        <div className="form-field">
                          <label>Roll No</label>
                          <input
                            type="text"
                            value={member.rollNo}
                            onChange={(e) =>
                              handleMemberChange(index, 'rollNo', e.target.value)
                            }
                            placeholder="Enter roll no"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button type="submit" className="submit-button">
                  Submit Team Registration
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
