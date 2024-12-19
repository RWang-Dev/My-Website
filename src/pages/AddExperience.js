import React, { useState } from "react";

function AddExperience() {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    date: "",
    description: "",
    tasks: [],
  });
  const [image, setImage] = useState(null);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
    } else {
      alert("Please upload a valid JPG or PNG image.");
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const tasksArray = formData.tasks
        .split(";")
        .filter((task) => task.trim());

      // Prepare the request data
      const requestData = {
        company: formData.company,
        title: formData.title,
        date: formData.date,
        description: formData.description,
        tasks: tasksArray,
      };

      // If there's an image, convert it to base64 and add it to the request
      if (image) {
        const imageData = await convertFileToBase64(image);
        requestData.imageData = imageData;
      }

      const response = await fetch("/api/addExperience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to add experience");
      }

      setSuccess(true);
      setFormData({
        company: "",
        title: "",
        date: "",
        description: "",
        tasks: "",
      });
      setImage(null);
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
      <div>
        <label htmlFor="image">Company Logo (JPG or PNG):</label>
        <input
          type="file"
          id="image"
          accept=".jpg,.jpeg,.png"
          onChange={handleImageChange}
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
