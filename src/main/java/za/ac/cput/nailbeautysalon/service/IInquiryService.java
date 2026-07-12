package za.ac.cput.nailbeautysalon.service;

import za.ac.cput.nailbeautysalon.domain.Inquiry;
import za.ac.cput.nailbeautysalon.domain.Subject;

import java.util.List;

public interface IInquiryService {
    Inquiry create(Inquiry inquiry);
    Inquiry read(String id);
    boolean delete(String id);

    List<Inquiry> getAll();
    List<Inquiry> findInquiriesBySubject(Subject subject);
    List<Inquiry> findByPhoneNumber(String phoneNumber);
}
