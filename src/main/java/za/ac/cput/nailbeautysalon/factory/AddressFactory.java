package za.ac.cput.nailbeautysalon.factory;

import za.ac.cput.nailbeautysalon.domain.Address;
import za.ac.cput.nailbeautysalon.util.Helper;

public class AddressFactory {
    public static Address createAddress(String streetNumber, String streetName, String suburb, String city, String province, int postalCode) {
        if (Helper.isNullOrEmpty(streetNumber) || Helper.isNullOrEmpty(streetName) || Helper.isNullOrEmpty(suburb) || Helper.isNullOrEmpty(city) || Helper.isNullOrEmpty(province) || Helper.isValidPostalCode(postalCode)) {
            return null;
        }

        return new Address.Builder()
                .setStreetNumber(streetNumber)
                .setStreetName(streetName)
                .setSuburb(suburb)
                .setCity(city)
                .setProvince(province)
                .setPostalCode(postalCode)
                .build();
    }
}