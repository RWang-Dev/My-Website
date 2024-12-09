import React, { useState } from "react";

function AddExperience() {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    date: "",
    description: "",
    tasks: [],
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

    const tasksArray = formData["tasks"].split(";");

    try {
      const response = await fetch("/api/addExperience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tasks: tasksArray, // Use the processed tasks array here
        }),
      });

      setSuccess(true);
      // setFormData({
      //   company: "",
      //   title: "",
      //   date: "",
      //   description: "",
      //   tasks: "",
      // });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h1>Enter new experience information</h1>
      <div>
        <label htmlFor="company">Company: </label>
        <input
          id="company"
          name="company"
          value={formData.company}
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
        <label htmlFor="tasks">Tasks:</label>
        <textarea
          id="tasks"
          name="tasks"
          value={formData.tasks}
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
