package za.ac.cput.nailbeautysalon.service;
/*
 ProductServiceTest.java
 ProductServiceTest Class
 Author: Confidence Khoza (222927402)
 Date: 04 July 2026
 */
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.nailbeautysalon.domain.Product;
import za.ac.cput.nailbeautysalon.factory.ProductFactory;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class ProductServiceTest {

    @Autowired
    private ProductService service;

    private Product product = ProductFactory.createProduct(
            1,
            "Gel Polish",
            "Nails",
            120.00,
            50,
            10,
            "Bottle",
            "Beauty Depot",
            "Professional gel nail polish"
    );

    @Test
    void a_create() {
        Product created = service.create(product);
        assertNotNull(created);
        System.out.println(created);
    }

    @Test
    void b_read() {
        Product read = service.read(product.getProductID());
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void c_update() {

        Product newProduct = new Product.Builder()
                .copy(product)
                .setPrice(150.00)
                .build();

        Product updated = service.update(newProduct);

        assertNotNull(updated);
        System.out.println(updated);
    }

    @Test
    @Disabled
    void d_delete() {
        Integer productID = product.getProductID();
        boolean deleted = service.delete(productID);

        assertTrue(deleted);
        System.out.println("Deletion status: " + deleted);
    }

    @Test
    void e_getAll() {
        System.out.println(service.getAll());
    }
}