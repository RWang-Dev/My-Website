import { Routes, Route } from "react-router-dom";

import AboutMePage from "./pages/About-Me-Page/AboutMe";
import ContactMe from "./pages/Contact-Me-Page/ContactMe";
import ProjectsPage from "./pages/Project-Page/Projects";
import Layout from "./components/layout/Layout";

function App() {
  return (
    // Uses the Layout component to contain everything in the website
    // Reminder: The layout component consists of the header and the <Main> element.
    <Layout>
      {/* The Routes component is a component that comes with React, and it basically keeps track of the different subdomains on this website */}
      <Routes>
        {/* Specifies the 3 main pages that this website will show */}
        <Route path="/" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Layout>
  );
}

export default App;
// git remote add origin https://github.com/RWang-Dev/test.git
// >> git branch -M main
// >> git push -u origin main
