package za.ac.cput.nailbeautysalon.controller;
/* EmployeeController.java
EmployeeController class
Author: Vincent Kanzi(221188932)
Date: 14 July 2026
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import za.ac.cput.nailbeautysalon.domain.Employee;
import za.ac.cput.nailbeautysalon.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private EmployeeService service;

    @Autowired
    public EmployeeController(EmployeeService service){
        this.service = service;
    }

    @PostMapping("/create")
    public Employee create(@RequestBody Employee employee){
        return service.create(employee);
    }

    @PostMapping("/read/{userId}")
    public Employee read(@PathVariable String userId){
        return service.read(userId);
    }

    @PutMapping("/update")
    public Employee update(@RequestBody Employee employee){
        return service.update(employee);
    }

    @DeleteMapping("/delete/{userId}")
    public boolean delete(@PathVariable String userId){
        return service.delete(userId);
    }

    @GetMapping("/getAll")
    public List<Employee> getAll(){
        return service.getAll();
    }
}
