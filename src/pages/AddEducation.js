import { useState } from "react";

function AddEducation(props) {
  const [formData, setForm] = useState({
    order_id: "",
    institution: "", // Corrected spelling
    date: "",
    description: "",
    gpa: "",
    additional_section: "",
    section_list: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let parsedValue = value;

    // Check if the input name is "section_list" and parse as an array
    if (name === "section_list") {
      parsedValue = value.split(",");
    }
    if (name === "order_id") {
      parsedValue = parseInt(value, 10);
    }

    // console.log(parsedValue);

    setForm((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Fixed typo

    try {
      const request = await fetch("/api/addEducation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (request.ok) {
        console.log("Successfully added education");
      } else {
        console.error("Error adding education");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <h1>Add Education</h1>
      <br />

      <label htmlFor="order_id">Order ID: </label>
      <input
        id="order_id"
        type="number"
        name="order_id"
        onChange={handleChange}
        value={formData.order_id}
      ></input>
      <label htmlFor="institution">Institution: </label>
      <input
        id="institution"
        name="institution"
        onChange={handleChange}
        value={formData.institution}
      ></input>

      <label htmlFor="date">Date: </label>
      <input
        id="date"
        name="date"
        onChange={handleChange}
        value={formData.date}
      ></input>

      <label htmlFor="description">Description: </label>
      <input
        id="description"
        name="description"
        onChange={handleChange}
        value={formData.description}
      ></input>

      <label htmlFor="gpa">GPA: </label>
      <input
        id="gpa"
        name="gpa"
        onChange={handleChange}
        value={formData.gpa}
      ></input>

      <label htmlFor="additional_section">Additional Section: </label>
      <input
        id="additional_section"
        name="additional_section"
        onChange={handleChange}
        value={formData.additional_section}
      ></input>

      <label htmlFor="section_list">Section List: </label>
      <input
        id="section_list"
        name="section_list"
        onChange={handleChange}
        value={formData.section_list.join(",")}
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddEducation;
