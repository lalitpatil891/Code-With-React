import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="input-box">
              <label htmlFor="name">Enter your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

              <label htmlFor="email">Enter your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

              <label htmlFor="password">Enter your Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div className="btn-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
