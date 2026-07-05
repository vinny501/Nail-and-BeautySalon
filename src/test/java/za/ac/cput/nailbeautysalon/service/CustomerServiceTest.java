package za.ac.cput.nailbeautysalon.service;
/* CustomerServiceTest.java
Customer Service Test class
Author: Chris Kabangu(220296693)
Date: 05 July 2026
*/
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.nailbeautysalon.domain.Customer;
import za.ac.cput.nailbeautysalon.factory.CustomerFactory;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class CustomerServiceTest {
    @Autowired
    private CustomerService service;

    private Customer customer = CustomerFactory.createCustomer("221188932", "Chris", "Kabangu", "chris@gmail.com", "0712345678", "C001");

    @Test
    void a_create() {
        Customer created = service.create(customer);
        assertNotNull(created);
        System.out.println(created);
    }

    @Test
    void b_read() {
        Customer read = service.read(customer.getUserId());
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void c_update() {
        Customer newCustomer = new Customer.Builder().copy(customer).setCellNumber("0798765432").build();
        Customer update = service.update(newCustomer);
        assertNotNull(update);
        System.out.println(update);
    }

    @Test
    @Disabled
    void d_delete() {
        String userId = customer.getUserId();
        boolean delete = service.delete(userId);
        assertTrue(delete);
        System.out.println("Deletion status: " + delete);
    }

    @Test
    void e_getAll() {
        System.out.println(service.getAll());
    }
}