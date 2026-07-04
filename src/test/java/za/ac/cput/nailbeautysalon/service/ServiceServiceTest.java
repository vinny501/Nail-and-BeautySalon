package za.ac.cput.nailbeautysalon.service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.nailbeautysalon.domain.Service;
import za.ac.cput.nailbeautysalon.factory.ServiceFactory;

import static org.junit.jupiter.api.Assertions.*;

/**
 * author: Nandipha Galada
 * student number: 221225366
 * date: 03 July 2026
 * Test class for ServiceService
 */

@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class ServiceServiceTest {

     @Autowired
     private ServiceService service;

     private Service serviceObj = ServiceFactory.createService("S001", " Russian Manicure", "Nails", "A russian manicure with treatment for the fingernails and hands.", 170.00);

    @Test
    void a_create() {
        Service created = service.create(serviceObj);
        assertNotNull(created);
        System.out.println(created);
    }

    @Test
    void b_read() {
        Service read = service.read(serviceObj.getServiceId());
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void c_update() {
        Service newService = new Service.Builder().copy(serviceObj).setPrice(180.00).build();
        Service updated = service.update(newService);
        assertNotNull(updated);
        System.out.println(updated);
    }

    @Test
    @Disabled
    void d_delete() {
        String serviceId = serviceObj.getServiceId();
        boolean deleted = service.delete(serviceId);
        assertTrue(deleted);
        System.out.println("Deleted" + deleted);
    }

    @Test
    void e_getAll() {
        System.out.println(service.getAll());
    }
}