import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/style.css';

const EmployeeList = () => {
    const token = localStorage.getItem("token");
    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err.message));
  }, );

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      console.log("Error in deleting employee", err.message);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="container">
      <h2>Employees List</h2>
      {employees.map((emp) => (
        <div key={emp._id} className="employee-card">
          <h3>Name: {emp.firstName} {emp.lastName}</h3>
          <h3>Position: {emp.position}</h3>
          <h3>Contant: {emp.contact}</h3>
          {emp.profileImage && <img src={emp.profileImage} alt="profile" />}
          <button className="btn-primary" onClick={() => handleUpdate(emp._id)}>
            Update
          </button>
          <button className="btn-danger" onClick={() => handleDelete(emp._id)}>
            Remove
          </button>
        </div>
      ))}
      <button className="btn-success" onClick={() => navigate("/add")}>
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeList;
