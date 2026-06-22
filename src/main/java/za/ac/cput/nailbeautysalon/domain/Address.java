package za.ac.cput.nailbeautysalon.domain;
/* Address.java
   Address POJO class
   Author: M Hlaba (223031437)
   Date: 22 June 2026 */
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
@IdClass(AddressId.class)
public class Address {
    @Id
    private String streetNumber;
    @Id
    private String streetName;
    @Id
    private String city;
    @Id
    private String suburb;
    @Id
    private String province;
    @Id
    private int postalCode;

    protected Address(){}

    public Address(Builder builder){
        this.streetNumber = builder.streetNumber;
        this.streetName = builder.streetName;
        this.suburb = builder.suburb;
        this.city = builder.city;
        this.province = builder.province;
        this.postalCode = builder.postalCode;
    }

    public String getStreetNumber() {
        return streetNumber;
    }

    public String getStreetName() {
        return streetName;
    }

    public String getCity() {
        return city;
    }

    public String getSuburb() {
        return suburb;
    }

    public String getProvince() {
        return province;
    }

    public int getPostalCode() {
        return postalCode;
    }

    @Override
    public String toString() {
        return "Address{" +
                "streetNumber='" + streetNumber + '\'' +
                ", streetName='" + streetName + '\'' +
                ", city='" + city + '\'' +
                ", suburb='" + suburb + '\'' +
                ", province='" + province + '\'' +
                ", postalCode=" + postalCode +
                '}';
    }

    public static class Builder{
        private String streetNumber;
        private String streetName;
        private String city;
        private String suburb;
        private String province;
        private int postalCode;

        public Builder setStreetNumber(String streetNumber) {
            this.streetNumber = streetNumber;
            return this;
        }

        public Builder setStreetName(String streetName) {
            this.streetName = streetName;
            return this;
        }

        public Builder setCity(String city) {
            this.city = city;
            return this;
        }

        public Builder setSuburb(String suburb) {
            this.suburb = suburb;
            return this;
        }

        public Builder setProvince(String province) {
            this.province = province;
            return this;
        }

        public Builder setPostalCode(int postalCode) {
            this.postalCode = postalCode;
            return this;
        }

        public Builder copy(Address address){
            this.streetNumber = address.streetNumber;
            this.streetName = address.streetName;
            this.suburb = address.suburb;
            this.city = address.city;
            this.province = address.province;
            this.postalCode = address.postalCode;
            return this;
        }

        public Address build() {
            return new Address(this);
        }
    }
}
