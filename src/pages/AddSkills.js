import { useState } from "react";

function AddSkills() {
  const [formData, setFormData] = useState({
    skill_type: "",
    skill_name: "",
    relevance: 0,
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    let parsedValue = value;

    if (name == "relevance") {
      parsedValue = parseInt(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
    return;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const request = await fetch("/api/addSkill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!request.ok) {
        console.error("Error adding skill!");
      }
    } catch (error) {
      console.error(error);
    }

    return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Skills</h1>
      <br />
      <label htmlFor="skill_type">Skill Type: </label>
      <input name="skill_type" id="skill_type" onChange={handleChange}></input>
      <label htmlFor="skill_name">Skill Name: </label>
      <input name="skill_name" id="skill_name" onChange={handleChange}></input>
      <label htmlFor="relevance">Relevance: </label>
      <input
        type="number"
        name="relevance"
        id="relevance"
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddSkills;
