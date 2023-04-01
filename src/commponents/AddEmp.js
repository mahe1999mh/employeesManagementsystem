
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import EmployeeService from "./EmployeeService";
import {Link} from 'react-router-dom';


export const AddEmp = () => {
    const [fist_name, setfastName] = useState('');
    const [last_name, setlastName] = useState('');
    const [email_id, setEmailid] = useState('');
    const navigate = useNavigate();

    const saveEmp = (e) =>{
       
        e.preventDefault();
        const employee = {email_id,fist_name ,last_name}
        // console.log(employee);

        EmployeeService.createEmp(employee).then((response)=>{
           console.log(response.data);
           navigate.push("/employee")

        }).catch(error =>{
            console.log(error);
        })
    }
  return (
    
    <>
    <div className=' add-emp add-emp.mx-auto'>Add Employee Component</div>

            
    <div className='card-body'>
            <form>
            <div>
                  <label>email id: <input type="text"
                   name="email_id" value={email_id}
                    onChange={(e)=> setEmailid(e.target.value)}/>
                    </label>
                </div>

                <div>
                  <label>fist name: <input type="text"
                   name="fist_name" value={fist_name}
                    onChange={(e)=> setfastName(e.target.value)}/>
                    </label>
                </div>

                <div>
                  <label>last name: <input type="text"
                   name="last_name" value={last_name}
                    onChange={(e)=> setlastName(e.target.value)}/>
                    </label>
                </div>
                
                <button className='btn btn-success'onClick={ e => saveEmp(e)}>save</button>
               <Link to="/" className="btn btn-danger"> Cancel </Link>
               </form>
            </div>


    </>
  )
}
