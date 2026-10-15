package za.ac.cput.nailbeautysalon.domain;

/* Appointment.java
Appointment model class
Author: Tshephiso Kekana (240264681)
Date: 22 June 2026
*/


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.time.LocalDateTime;
@Entity
public class Appointment {
    @Id
    private String appointmentId;
    private LocalDateTime dateTime;
    private String serviceSelected;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Address address;
    private String notes;
    private String status;

    protected Appointment() {
    }


    public Appointment(Builder builder){
        this.appointmentId = builder.appointmentId;
        this.dateTime= builder.dateTime;
        this.serviceSelected =builder.serviceSelected;
        this.address = builder.address;
        this.notes = builder.notes;
        this.status = builder.status;
    }

    public Address getAddress() {
        return address;
    }

    public String getStatus() {
        return status;
    }

    public String getServiceSelected() {
        return serviceSelected;
    }

    public String getNotes() {
        return notes;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public String getAppointmentId() {
        return appointmentId;
    }


    @Override
    public String toString() {
        return "Appointment{" +
                "appointmentId='" + appointmentId + '\'' +
                ", dateTime=" + dateTime +
                ", serviceSelected='" + serviceSelected + '\'' +
                ", address=" + address +
                ", notes='" + notes + '\'' +
                ", status='" + status + '\'' +
                '}';
    }

    public static class Builder {
    private String appointmentId;
    private LocalDateTime dateTime;
    private String serviceSelected;
    private Address address;
    private String notes;
    private String status;

    public Builder setAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
        return this;
    }

    public Builder setStatus(String status) {
        this.status = status;
        return this;
    }

    public Builder setServiceSelected(String serviceSelected) {
        this.serviceSelected = serviceSelected;
        return this;
    }

    public Builder setLocalDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    public Builder setAddress(Address address) {
        this.address = address;
        return this;
    }

    public Builder setNotes(String notes) {
        this.notes = notes;
        return this;
    }
    public Builder copy(Appointment appointment){
        this.appointmentId=appointment.appointmentId;
        this.dateTime= appointment.dateTime;
        this.serviceSelected = appointment.serviceSelected;
        this.address = appointment.address;
        this.notes = appointment.notes;
        this.status = appointment.status;
        return this;
    }
    public Appointment build() {return new Appointment(this);}
}
}

