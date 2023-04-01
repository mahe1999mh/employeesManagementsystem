
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import EmployeeService from './EmployeeService';

export const ListEmployee = () => {
    const [employee, setemployee] = useState([]);
    useEffect(()=>{
        
        EmployeeService.getAllEmployee().then((res)=>{
            setemployee(res.data)
            console.log(res.data);
        }).catch(error =>{
            console.log(error);
        })

    },[])
  return (
    <div className='container'>
        
        
        
        <h2 className='text-center'>List Employee</h2>
        <Link to = "/add-emp" className='btn btn-primary mb-2'> Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Emp id</th>
                <th>Fist Name</th>
                <th>Last Name</th>
            
            </thead>
            <tbody>
                {
                    employee.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.email_id}</td>
                            <td>{employee.fist_name}</td>
                            <td>{employee.last_name}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}
