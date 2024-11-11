import React, { useState } from "react";

function AddIntro() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
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
      const response = await fetch("/api/setIntro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to add Intro: ${response.status} ${response.statusText}`
        );
      }

      setSuccess(true);
      setFormData({
        title: "",
        content: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h1>Enter new Intro</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Description:</label>
        <input
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Experience"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Intro added successfully!</p>}
    </form>
  );
}

export default AddIntro;
