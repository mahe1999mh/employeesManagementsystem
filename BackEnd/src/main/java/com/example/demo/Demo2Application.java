package com.example.demo;

import javax.management.loading.PrivateClassLoader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepo;

@SpringBootApplication
public class Demo2Application implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(Demo2Application.class, args);
		

		
	}
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
//		Employee emp = new Employee();
//		emp.setFist_name("mahi");
//		emp.setLast_name("reddy");
//		emp.setEmail_id("mahe@gmail.com");
//		employeeRepo.save(emp);
//		
//		Employee emp1 = new Employee();
//		emp1.setFist_name("yash");
//		emp1.setLast_name("reddy");
//		emp1.setEmail_id("yash@gmail.com");
//		employeeRepo.save(emp1);
		
		
	}
	

	

	

}
