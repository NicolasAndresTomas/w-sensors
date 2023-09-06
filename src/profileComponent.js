//import libaries
import React from 'react';
import './index.css'; 

//profile function
function ProfileComponent() {
  return (
  <div className="profile">
      <div className="profile-component">
        <h1>Profile</h1>
        <label>Email address:</label>
        <div className="profile-section">
          <input type="text" placeholder="Enter email" />
        </div>
        <label>Password:</label>
        <div className="profile-section">
          <input type="password" placeholder="Enter password" />
        </div>
        <label>First Name:</label>
        <div className="profile-section">
          <input type="firstname" placeholder="Enter first name" />
        </div>
        <label>Last Name:</label>
        <div className="profile-section">
          <input type="lastname" placeholder="Enter last name" />
        </div>
        <button>Save Changes</button>
      </div>
      <div className="profile-deletion-component">
        <h1>Delete Account</h1>
        <p>You will lose your account once deletion request has been submitted.</p>
        <button>Delete Account</button>
      </div>
    </div>
  );
}

export default ProfileComponent;