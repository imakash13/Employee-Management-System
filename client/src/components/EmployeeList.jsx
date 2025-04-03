import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import 'C:/Users/Work/OneDrive/Desktop/project/Employee-management-system/client/src/App.css'

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/employees")
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err.message));
    }, []);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/employees/${id}`);
            setEmployees(employees.filter((emp) => emp._id !== id));
        }
        catch (err) {
            console.log("Error in deleting employee", err.message);
        }
    }

    const handleUpdate = async (id) => {
        navigate(`/update/${id}`)
    }

    return (
        <>
            <h2>Employees List</h2>
            {employees.map(emp => (
                <div key={emp._id} className='employeeCard'>
                    <h3>{emp.name}</h3>
                    <h3>{emp.position}</h3>
                    <h3>{emp.contact}</h3>
                    {emp.profileImage && <img src={emp.profileImage} alt='profile' width='100' />}
                    <button onClick={() => handleUpdate(emp._id)}>Update Employee</button>
                    <button onClick={() => handleDelete(emp._id)}>Remove Employee</button>
                </div>
            ))}
            <button onClick={() => navigate('/add')}>Add New Employee</button>
        </>
    )
}

export default EmployeeList;
