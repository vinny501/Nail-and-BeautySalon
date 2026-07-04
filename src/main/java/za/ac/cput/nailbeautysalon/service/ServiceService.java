package za.ac.cput.nailbeautysalon.service;

import org.springframework.beans.factory.annotation.Autowired;
import za.ac.cput.nailbeautysalon.domain.Service;
import za.ac.cput.nailbeautysalon.repository.ServiceRepository;

import java.util.List;

/**
 * author: Nandipha Galada
 * student number: 221225366
 * date: 03 July 2026
 * Class for ServiceService
 */

@org.springframework.stereotype.Service
public class ServiceService implements IServiceService<Service, String> {

    private ServiceRepository repository;

    @Autowired
    ServiceService(ServiceRepository repository){
        this.repository = repository;
    }

    @Override
    public Service create(Service service) {
        return this.repository.save(service);
    }

    @Override
    public Service read(String serviceId) {
        return this.repository.findById(serviceId).orElse(null);
    }

    @Override
    public Service update(Service service) {
        return this.repository.save(service);
    }

    @Override
    public boolean delete(String serviceId) {
        this.repository.deleteById(serviceId);
        return true;
    }

    @Override
    public List<Service> getAll() {
        return this.repository.findAll();
    }
}
