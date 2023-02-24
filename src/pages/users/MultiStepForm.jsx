import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
          <label>State</label>
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
          <label>Zip</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} />
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}

export default MultiStepForm;
