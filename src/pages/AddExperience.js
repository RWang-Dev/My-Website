import React, { useState } from "react";

function AddExperience() {
  const [formData, setFormData] = useState({
    experienceType: "",
    title: "",
    date: "",
    description: "",
    contributions: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/addExperience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to add experience: ${response.status} ${response.statusText}`
        );
      }

      setSuccess(true);
      setFormData({
        experienceType: "",
        title: "",
        date: "",
        description: "",
        contributions: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Enter new experience information</h1>
      <div>
        <label htmlFor="experienceType">Experience Type: </label>
        <input
          id="experienceType"
          name="experienceType"
          value={formData.experienceType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="contributions">Contributions:</label>
        <textarea
          id="contributions"
          name="contributions"
          value={formData.contributions}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Experience"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Experience added successfully!</p>
      )}
    </form>
  );
}

export default AddExperience;