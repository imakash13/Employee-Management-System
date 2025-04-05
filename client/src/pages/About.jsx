import React, { useState } from "react";
import "../styles/About.css";

export default function About() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="about-container">
      <h2 className="about-title">About This Application</h2>
      
      <div className="accordion">
        <div className="accordion-item">
          <button onClick={() => toggleSection(0)} className="accordion-button">
            About This Application
          </button>
          <div className={`accordion-content ${activeSection === 0 ? "active" : ""}`}>
            <p>
              This Employee Management System is a full-stack web application that allows HR managers or administrators to manage employee data efficiently. Users can perform key operations such as adding, updating, viewing, and deleting employee records, along with uploading profile pictures. The system supports secure login, data validation, and provides a user-friendly interface to streamline HR workflows.
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleSection(1)} className="accordion-button">
            Core Features
          </button>
          <div className={`accordion-content ${activeSection === 1 ? "active" : ""}`}>
            <p>
              The application offers a robust set of features:
              <ul>
                <li>CRUD operations on employee records</li>
                <li>Profile image upload via Cloudinary</li>
                <li>JWT-based authentication for secure access</li>
                <li>Search and filter employees</li>
                <li>Pagination support for large datasets</li>
                <li>Responsive, clean UI built with React</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleSection(2)} className="accordion-button">
            Why Use This App
          </button>
          <div className={`accordion-content ${activeSection === 2 ? "active" : ""}`}>
            <p>
              This system is ideal for startups, HR teams, or organizations looking for a lightweight yet powerful employee management tool. It’s fully responsive, easy to deploy, and customizable. It eliminates the need for spreadsheets or manual records and brings efficiency to employee data handling — all while being completely free and open source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
