package za.ac.cput.nailbeautysalon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.nailbeautysalon.domain.Address;
import za.ac.cput.nailbeautysalon.domain.Contact;
import za.ac.cput.nailbeautysalon.repository.ContactRepository;

import java.util.Collection;
import java.util.List;

@Service
public class ContactService implements IContactService{

    private ContactRepository repository;

    @Autowired
    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    @Override
    public Contact create(Contact contact) {
        return this.repository.save(contact);
    }

    @Override
    public Contact read(Address id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Contact update(Contact contact) {
        return this.repository.save(contact);
    }

    @Override
    public boolean delete(Address id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Contact> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Contact> findContactByAddressProvinceIn(Collection<String> addressProvinces) {
        return repository.findContactByAddressProvinceIn(addressProvinces);
    }


}
