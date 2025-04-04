import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {

    const [employee,setEmployee] = useState({'firstName':'','lastName':'','position':'','contact':''});
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Unauthorized! Please log in first.");
            return;
        };
        if(employee.firstName && employee.lastName && employee.position && employee.contact){
            setEmployee({'firstName':'','lastName':'','position':'','contact':''});

            const formData = new FormData();
            formData.append("firstName",employee.firstName);
            formData.append("lastName",employee.lastName);
            formData.append("position",employee.position);
            formData.append("contact",employee.contact);
            try{
                const res = await axios.post("http://localhost:5000/api/employees/add", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log('response: ',res.data);
                setEmployee({firstName:'',lastName:'',position:'',contact:''});
                console.log(res.data.employee);
            }
            catch(err){
                console.log("error in addEmployee",err.message);
            }
        }
        else{
            alert('Enter all details');
        }
        navigate('/');
    }

    
  return (
    <>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name' value={employee.firstNname}
             onChange={(e)=>setEmployee({...employee,firstName:e.target.value})} />
            <input type="text" placeholder='Last Name' value={employee.lastName}
             onChange={(e)=>setEmployee({...employee,lastName:e.target.value})} />
            <input type="text" placeholder='Position' value={employee.position}
             onChange={(e)=>setEmployee({...employee,position:e.target.value})} />
            <input type="text" placeholder='Contact' value={employee.contact}
             onChange={(e)=>setEmployee({...employee,contact:e.target.value})} />
            <input type="submit"/>
        </form>
        {/* <button onClick={()=>navigate('/')}>Display Employees</button> */}
    </>
  )
}

export default AddEmployee;