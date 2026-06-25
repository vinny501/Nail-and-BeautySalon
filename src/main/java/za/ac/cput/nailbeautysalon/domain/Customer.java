package za.ac.cput.nailbeautysalon.domain;

/* Customer.java
   Author: Chris Kabangu
   Student Number: 220296693
   Date: 23 June 2026
*/

import jakarta.persistence.*;

@Entity
public class Customer extends User {

    private String customerId;

    protected Customer() {}

    public Customer(Builder builder) {
        this.userId = builder.userId;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.email = builder.email;
        this.cellNumber = builder.cellNumber;
        this.customerId = builder.customerId;
    }

    public String getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getCellNumber() {
        return cellNumber;
    }

    public String getCustomerId() {
        return customerId;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId='" + customerId + '\'' +
                ", userId='" + userId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", cellNumber='" + cellNumber + '\'' +
                '}';
    }

    public static class Builder {

        private String userId;
        private String firstName;
        private String lastName;
        private String email;
        private String cellNumber;
        private String customerId;

        public Builder setUserId(String userId) {
            this.userId = userId;
            return this;
        }

        public Builder setFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder setLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setCellNumber(String cellNumber) {
            this.cellNumber = cellNumber;
            return this;
        }

        public Builder setCustomerId(String customerId) {
            this.customerId = customerId;
            return this;
        }

        public Builder copy(Customer customer) {
            this.userId = customer.userId;
            this.firstName = customer.firstName;
            this.lastName = customer.lastName;
            this.email = customer.email;
            this.cellNumber = customer.cellNumber;
            this.customerId = customer.customerId;
            return this;
        }

        public Customer build() {
            return new Customer(this);
        }
    }
}