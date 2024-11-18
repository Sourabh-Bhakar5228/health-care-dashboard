import React, { useState } from "react";
import "../styles.css";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!age || age <= 0) {
      newErrors.age = "Please enter a valid age";
    }
    if (!file) {
      newErrors.file = "File is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("file", file);

    // Here you would typically send the form data to your backend
    console.log("Form Data Submitted:", { name, age, file });
    alert("Form submitted successfully!");

    // Reset form after submission
    setName("");
    setAge("");
    setFile(null);
    setErrors({});
  };

  return (
    <div className="container">
      <h1 className="header">Healthcare Dashboard</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="inputGroup">
          <label className="label">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="input"
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="inputGroup">
          <label className="label">File Upload:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="input"
          />
          {errors.file && <span className="error">{errors.file}</span>}
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
