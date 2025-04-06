import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import AboutMePage from "./pages/About-Me-Page/AboutMe";
import ContactMe from "./pages/Contact-Me-Page/ContactMe";
import ProjectsPage from "./pages/Project-Page/Projects";
import AddExperience from "./pages/AddExperience";
import AddEducation from "./pages/AddEducation";
import AddExtracurriculars from "./pages/AddExtracurriculars";
import AddIntro from "./pages/AddIntro";
import AddSkills from "./pages/AddSkills";
import Layout from "./components/layout/Layout";
import AddProject from "./pages/AddProject";
import { AppProvider } from "./AppContext";

const bcrypt = require("bcryptjs");

function App() {
  const [isEditing, setIsEditing] = useState(false);

  async function hashPassword(plainPassword) {
    const saltRounds = 10; // Number of salt rounds, 10 is a good default
    try {
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      console.log("Hashed Password:", hashedPassword);
      return hashedPassword;
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  }

  const handleEditClick = async () => {
    // Ask for a password when the user clicks the edit button
    if (isEditing) {
      setIsEditing(!isEditing);
      return;
    }
    const password = prompt("Enter the password to switch into edit mode:");
    const password_hash = await hashPassword(password);

    const result = await fetch("/api/getPasswordHash");

    if (result.ok) {
      const data = await result.json();
      console.log(data.password_hash);
      const isMatch = await bcrypt.compare(password, data.password_hash);
      console.log(isMatch, password);
      if (isMatch) {
        setIsEditing(!isEditing);
      } else {
        alert("Incorrect password");
      }
    } else {
      console.log("error fetching password");
    }
  };

  // async function setPassword() {
  //   const new_password = prompt("Enter the new admin password");
  //   const password_hash = await hashPassword(new_password);

  //   const result = await fetch("/api/setPasswordHash", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username: "admin", password_hash: password_hash }),
  //   });

  //   if (!result.ok) {
  //     console.log("Error setting password");
  //   } else {
  //     console.log("Succeeded setting password");
  //   }

  //   return;
  // }

  return (
    // Uses the Layout component to contain everything in the website
    // Reminder: The layout component consists of the header and the <Main> element.
    <Layout toggleEdit={handleEditClick} isEditing={isEditing}>
      {/* The Routes component is a component that comes with React, and it basically keeps track of the different subdomains on this website */}
      <Routes>
        {/* Specifies the 3 main pages that this website will show */}
        <Route path="/" element={<AboutMePage edit_mode={isEditing} />} />
        <Route
          path="/projects"
          element={<ProjectsPage edit_mode={isEditing} />}
        />
        <Route path="/contact-me" element={<ContactMe />} />
        {/* <Route path="/db" element={<AddSkills />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
// git remote add origin https://github.com/RWang-Dev/test.git
// >> git branch -M main
// >> git push -u origin main
