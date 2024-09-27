import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea 
            value={formData.message} 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <span>{errors.message}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;