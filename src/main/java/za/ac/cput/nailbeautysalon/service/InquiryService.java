package za.ac.cput.nailbeautysalon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.nailbeautysalon.domain.Inquiry;
import za.ac.cput.nailbeautysalon.domain.Subject;
import za.ac.cput.nailbeautysalon.repository.InquiryRepository;

import java.util.List;

@Service
public class InquiryService implements IInquiryService {

    private InquiryRepository repository;

    @Autowired
    public InquiryService(InquiryRepository repository) {

        this.repository = repository;
    }

    @Override
    public Inquiry create(Inquiry inquiry) {
        if(inquiry == null) return null;
        return repository.save(inquiry);
    }

    @Override
    public Inquiry read(String id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public boolean delete(String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Inquiry> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Inquiry> findInquiriesBySubject(Subject subject) {
        return repository.findInquiriesBySubject(subject);
    }

    @Override
    public List<Inquiry> findByPhoneNumber(String phoneNumber) {
        return repository.findByPhoneNumber(phoneNumber);
    }
}
