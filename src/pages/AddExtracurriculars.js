import React, { useState } from "react";

function AddExperience() {
  const [formData, setFormData] = useState({
    extracurricular: "",
    date: "",
    description: "",
    accomplishments: [],
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

    const accomplishmentsArray = formData["accomplishments"].split(";");

    try {
      const response = await fetch("/api/addExtracurricular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          accomplishments: accomplishmentsArray, // Use the processed tasks array here
        }),
      });

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h1>Enter new extracurricular information</h1>
      <div>
        <label htmlFor="extracurricular">Extracurricular Name: </label>
        <input
          id="extracurricular"
          name="extracurricular"
          value={formData.extracurricular}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
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
        <label htmlFor="accomplishments">Accomplishments:</label>
        <textarea
          id="accomplishments"
          name="accomplishments"
          value={formData.accomplishments}
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
