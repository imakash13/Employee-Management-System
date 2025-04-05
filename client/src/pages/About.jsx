import React, { useState } from 'react';
import '../styles/About.css';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const sections = [
    {
      title: 'About Website',
      content: `This Employee Management System is a full-stack web application that allows HR managers or administrators to manage employee data efficiently. Users can perform key operations such as adding, updating, viewing, and deleting employee records, along with uploading profile pictures. The system supports secure login, data validation, and provides a user-friendly interface to streamline HR workflows.`,
    },
    {
      title: 'Easy to Use',
      content: `Just paste your text and perform actions like uppercase, lowercase, remove extra spaces, fetch emails, and more.`,
    },
    {
      title: 'Free to Use',
      content: `All features are completely free to use with no charges at all.`,
    },
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <button
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
          </button>
          <div className={`accordion-body ${activeIndex === index ? 'open' : ''}`}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
