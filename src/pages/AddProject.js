import { useState, useEffect } from "react";

function AddProject() {
  const [formData, setFormData] = useState({
    project: "",
    skills: "",
    description: "",
    links: "",
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
      const skillsArray = formData.skills
        .split(";")
        .filter((skill) => skill.trim());
      const linksArray = formData.links
        .split(";")
        .filter((link) => link.trim());

      // Prepare the request data
      const requestData = {
        project: formData.company,
        skills: skillsArray,
        description: formData.description,
        links: linksArray,
      };

      // If there's an image, convert it to base64 and add it to the request
      if (image) {
        const imageData = await convertFileToBase64(image);
        requestData.imageData = imageData;
      }

      const response = await fetch("/api/addProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      setSuccess(true);
      setFormData({
        project: "",
        skills: [],
        description: "",
        links: [],
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
      <h1>Enter new Project information</h1>
      <div>
        <label htmlFor="project">Project Name: </label>
        <input
          id="project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="skills">Skills Used:</label>
        <input
          id="skills"
          name="skills"
          value={formData.skills}
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
        <label htmlFor="links">Links:</label>
        <textarea
          id="tasks"
          name="tasks"
          value={formData.tasks}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Project Image (JPG or PNG):</label>
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

export default AddProject;
