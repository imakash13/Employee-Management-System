import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {

  const [employee, setEmployee] = useState({firstName:'',lastName:'',position:'',contact:''});
  const {id} = useParams();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName',employee.firstName);
    formData.append('lastName',employee.lastName);
    formData.append('position',employee.position);
    formData.append('contact',employee.contact);
    try{
      await axios.put(`http://localhost:5000/api/employees/${id}`,formData, {
        headers: { 'Content-Type': 'multipart/form-data' }});
      navigate('/');
    }
    catch(err){
      console.log("Error in updating the Employee details",err.message);
    }
  }

  return (
    <>
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter First Name'
           value={employee.firstName}
           onChange={(e) => setEmployee({...employee,firstName:e.target.value})} />
          <input type="text" placeholder='Enter Last Name'
           value={employee.lastName}
           onChange={(e) => setEmployee({...employee,lastName:e.target.value})} />
          <input type="text" placeholder='Enter Position'
           value={employee.position}
           onChange={(e) => setEmployee({...employee,position:e.target.value})} />
          <input type="text" placeholder='Enter Contact'
           value={employee.contact}
           onChange={(e) => setEmployee({...employee,contact:e.target.value})} />
          <input type="submit"/>
        </form>
    </>
  )
}

export default UpdateEmployee;