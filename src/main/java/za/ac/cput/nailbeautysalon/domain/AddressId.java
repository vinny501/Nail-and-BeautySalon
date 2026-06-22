package za.ac.cput.nailbeautysalon.domain;
/* AddressId.java
   Author: M Hlaba (223031437)
   Date: 22 June 2026 */
import java.io.Serializable;
import java.util.Objects;

public class AddressId implements Serializable {
    private String streetNumber;
    private String streetName;
    private String city;
    private String suburb;
    private String province;
    private int postalCode;

    protected AddressId(){}

    public AddressId(String streetNumber, String streetName, String city, String suburb, String province, int postalCode) {
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.city = city;
        this.suburb = suburb;
        this.province = province;
        this.postalCode = postalCode;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        AddressId addressId = (AddressId) o;
        return postalCode == addressId.postalCode && Objects.equals(streetNumber, addressId.streetNumber) && Objects.equals(streetName, addressId.streetName) && Objects.equals(city, addressId.city) && Objects.equals(suburb, addressId.suburb) && Objects.equals(province, addressId.province);
    }

    @Override
    public int hashCode() {
        return Objects.hash(streetNumber, streetName, city, suburb, province, postalCode);
    }
}
