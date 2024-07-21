import React, { useState } from 'react';
import './join.css'; // Ensure this path is correct

const Join = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    soccerSeason: '',
    country: '',
    location: '',
    plan: '',
  });

  const [errors, setErrors] = useState({});
  const [confirmationPage, setConfirmationPage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^\(\d{3}\) \d{3} - \d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be in the format (XXX) XXX - XXXX';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setConfirmationPage(true);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide the notification after 3 seconds
    }
  };

  return (
    <div className="join-page">
      {showNotification && <div className="notification">You have successfully signed up for the {formData.plan} plan!</div>}
      <h1>Sign Up!</h1>
      <div className="join-container">
        {!confirmationPage ? (
          <>
            <form className="join-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="(XXX) XXX - XXXX" value={formData.phoneNumber} onChange={handleChange} />
                {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="something@something.com" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-field">
                <label htmlFor="soccerSeason">Soccer Season</label>
                <select id="soccerSeason" name="soccerSeason" value={formData.soccerSeason} onChange={handleChange}>
                  <option value="">Select the season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="country">Country</label>
                <select id="country" name="country" value={formData.country} onChange={handleChange}>
                  <option value="">Select the country</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                  <option value="australia">Australia</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="location">Location</label>
                <select id="location" name="location" value={formData.location} onChange={handleChange}>
                  <option value="">Select the location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="toronto">Toronto</option>
                  <option value="vancouver">Vancouver</option>
                  <option value="london">London</option>
                  <option value="sydney">Sydney</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="plan">Choose Plan</label>
                <select id="plan" name="plan" value={formData.plan} onChange={handleChange}>
                  <option value="">Select a plan</option>
                  <option value="Amateur">Amateur Plan - $89.99 /MONTH</option>
                  <option value="Pro">Pro Plan - $149.99 /MONTH</option>
                  <option value="Ultimate">Ultimate Plan - $199.99 /MONTH</option>
                </select>
              </div>
              <button type="submit">Confirm</button>
            </form>
            <div className="plan-details">
              <div className="plan amateur-plan">
                <h2>AMATEUR PLAN</h2>
                <div className="price">$89.99 /MONTH</div>
                <ul>
                  <li>Beginner Soccer Drills and Programs</li>
                  <li>Bi-weekly Progress Tracking</li>
                  <li>Performance Reports</li>
                  <li>Monthly One-on-One Consultation</li>
                  <li>One Selected Training Location</li>
                  <li>Access to 5/10 of the Tournaments</li>
                </ul>
              </div>
              <div className="plan pro-plan">
                <h2>PRO PLAN</h2>
                <div className="price">$149.99 /MONTH</div>
                <ul>
                  <li>Everything in the Amateur Plan</li>
                  <li>Advanced Soccer Drills with Messi</li>
                  <li>Detailed Nutritional Plan with Ronaldo</li>
                  <li>Weekly One-on-One Coaching</li>
                  <li>Choice of any Pro Coach</li>
                  <li>Access to all of the Tournaments</li>
                </ul>
              </div>
              <div className="plan ultimate-plan">
                <h2>ULTIMATE PLAN</h2>
                <div className="price">$199.99 /MONTH</div>
                <ul>
                  <li>Everything in the Pro Plan</li>
                  <li>Unlimited Training Sessions</li>
                  <li>Personalized Gear and Equipment</li>
                  <li>Exclusive Training Camps</li>
                  <li>VIP Access to Events</li>
                  <li>24/7 Support</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="confirmation-page">
            <h2>Confirmation</h2>
            <p>Thank you for signing up!</p>
            <p>
              <strong>Name:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p>
              <strong>Phone Number:</strong> {formData.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Soccer Season:</strong> {formData.soccerSeason}
            </p>
            <p>
              <strong>Country:</strong> {formData.country}
            </p>
            <p>
              <strong>Location:</strong> {formData.location}
            </p>
            <p>
              <strong>Plan:</strong> {formData.plan}
            </p>
            <button onClick={() => setConfirmationPage(false)}>Go Back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Join;
