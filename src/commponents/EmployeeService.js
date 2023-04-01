import axios from 'axios';

const EMPLOYEE_BASE_REST_APU_URL = 'http://localhost:8080/api/v1/employees';
class EmployeeService{
     getAllEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_APU_URL)
     }

     createEmp(employee){
      return axios.post(EMPLOYEE_BASE_REST_APU_URL, employee)
     }
}

export default new EmployeeService();