package za.ac.cput.nailbeautysalon.controller;
/*
Customer Controller class
220296693
Date: 20 July 2026
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import za.ac.cput.nailbeautysalon.domain.Customer;
import za.ac.cput.nailbeautysalon.service.CustomerService;
import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private CustomerService service;

    @Autowired
    public CustomerController(CustomerService service){
        this.service = service;
    }

    @PostMapping("/create")
    public Customer create(@RequestBody Customer customer){
        return service.create(customer);
    }

    @GetMapping("/read/{customerId}")
    public Customer read(@PathVariable String customerId){
        return service.read(customerId);
    }

    @PutMapping("/update")
    public Customer update(@RequestBody Customer customer){
        return service.update(customer);
    }

    @DeleteMapping("/delete/{customerId}")
    public boolean delete(@PathVariable String customerId){
        return service.delete(customerId);
    }

    @GetMapping("/getAll")
    public List<Customer> getAll(){
        return service.getAll();
    }
}