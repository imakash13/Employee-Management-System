import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {

    const [employee,setEmployee] = useState({'name':'','position':'','contact':''});
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(employee.name && employee.position && employee.contact){
            setEmployee({'name':'','position':'','contact':''});

            const formData = new FormData();
            formData.append("name",employee.name);
            formData.append("position",employee.position);
            formData.append("contact",employee.contact);
            try{
                const res = await axios.post("http://localhost:5000/api/employees/add",formData);
                console.log('response: ',res.data);
                setEmployee({name:'',position:'',contact:''});
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
            <input type="text" placeholder='name' value={employee.name}
             onChange={(e)=>setEmployee({...employee,name:e.target.value})} />
            <input type="text" placeholder='position' value={employee.position}
             onChange={(e)=>setEmployee({...employee,position:e.target.value})} />
            <input type="text" placeholder='contact' value={employee.contact}
             onChange={(e)=>setEmployee({...employee,contact:e.target.value})} />
            <input type="submit"/>
        </form>
        {/* <button onClick={()=>navigate('/')}>Display Employees</button> */}
    </>
  )
}

export default AddEmployee;