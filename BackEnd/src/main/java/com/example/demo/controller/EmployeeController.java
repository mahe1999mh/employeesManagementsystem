package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepo;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
   
	@Autowired
	private EmployeeRepo employeerepo;
	
	@GetMapping
	public List<Employee> getAllEmployee(){
		
		return  employeerepo.findAll();
	}
	
//	build emp rest api
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeerepo.save(employee);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Employee>getEmpoyeeById(long id){
		Employee employee = employeerepo.findById(id).orElseThrow();
		return ResponseEntity.ok(employee);
	}
	
	
}
