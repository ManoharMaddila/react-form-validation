import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert(`Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>User Registration with Validation</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-block", textAlign: "left", marginTop: "1rem" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "0.5rem", width: "200px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "0.5rem", width: "200px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "0.5rem", width: "200px" }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Register
        </button>
      </form>
    </div>
  );
}
