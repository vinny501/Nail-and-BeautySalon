package za.ac.cput.nailbeautysalon.factory;
/* EmployeeFactoryTest.java
Employee Factory Test class
Author: Vincent Kanzi(221188932)
Date: 25 June 2026
*/
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import za.ac.cput.nailbeautysalon.domain.Employee;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.MethodName.class)

class
EmployeeFactoryTest {

    @Test
    void a_createEmployee() {
        Employee employee = EmployeeFactory.createEmployee("221188932", "Vinny", "Kanzi", "vinny@gmail.com", "0712124569", "30121861", "Developer");
        assertNotNull(employee);
        System.out.println(employee);
    }

    @Test
    void b_createEmployeeThatFails(){
        Employee employee = EmployeeFactory.createEmployee("215454212", "Alu", "Luwalala", "alugmail.com", "02133258", "30142658", "DevOps");
        assertNull(employee);
        System.out.println(employee);
    }
}