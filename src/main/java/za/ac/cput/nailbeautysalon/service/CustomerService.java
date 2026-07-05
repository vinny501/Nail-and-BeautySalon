package za.ac.cput.nailbeautysalon.service;
/* CustomerService.java
Customer Service class
Author: Chris Kabangu(220296693)
Date: 05 July 2026
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.nailbeautysalon.domain.Customer;
import za.ac.cput.nailbeautysalon.repository.CustomerRepository;

import java.util.List;

@Service
public class CustomerService implements ICustomerService<Customer, String> {
    private CustomerRepository repository;

    @Autowired
    CustomerService(CustomerRepository repository){
        this.repository = repository;
    }

    @Override
    public Customer create(Customer customer){
        return this.repository.save(customer);
    }

    @Override
    public Customer read(String userId) {
        return this.repository.findById(userId).orElse(null);
    }

    @Override
    public Customer update(Customer customer) {
        return this.repository.save(customer);
    }

    @Override
    public boolean delete(String userId) {
        this.repository.deleteById(userId);
        return true;
    }

    @Override
    public List<Customer> getAll() {
        return this.repository.findAll();
    }

}