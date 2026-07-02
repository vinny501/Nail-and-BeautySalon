package za.ac.cput.nailbeautysalon.factory;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import za.ac.cput.nailbeautysalon.domain.Service;

import static org.junit.jupiter.api.Assertions.*;

/**
 * author: Nandipha Galada
 * student number: 221225366
 * date: 23 June 2026
 * Test class for ServiceFactory
 */

@TestMethodOrder(MethodOrderer.MethodName.class)

public class ServiceFactoryTest {

    @Test
    void a_testCreateValidService() {
        Service service = ServiceFactory.createService("S001", "Manicure", "Russian Manicure", "A russian manicure with nail poilsh", 170.0);

        assertNotNull(service);
        assertEquals("S001", service.getServiceId());
        assertEquals("Manicure", service.getServiceName());
        assertEquals("Russian Manicure", service.getCategory());

        System.out.println(service);
    }

    @Test
    void b_testCreateMassageService() {
        Service service = ServiceFactory.createService("S002", "Massage", "Swedish Massage", "A relaxing Swedish massage", 350.0);

        assertNotNull(service);
        assertEquals("Massage", service.getCategory());

        System.out.println(service);
    }

    @Test
    void c_testCreateInvalidService() {
        Service service = ServiceFactory.createService("", "", "", "", -100.0);

        assertNull(service);

        System.out.println(service);
    }
}
