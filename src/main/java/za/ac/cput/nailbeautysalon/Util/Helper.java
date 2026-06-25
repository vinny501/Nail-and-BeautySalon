package za.ac.cput.nailbeautysalon.Util;
/* Helper.java
Helper class
Author: Vincent Kanzi(221188932)
Date: 25 June 2026
*/

import org.apache.commons.validator.routines.EmailValidator;

public class Helper {
    public static boolean isNullOrEmpty(String str){
        if ((str == null) || (str.isEmpty())){
            return true;
        }
        return false;
    }

    public static boolean isValidEmail(String email) {
        EmailValidator validator = EmailValidator.getInstance();
        return validator.isValid(email);
    }

    public static boolean isNumeric(int in){
        if(in < 0){
            return true;
        }
        return false;
    }

    public static boolean isValidPostalCode(int code){
        if(code < 1000 || code > 9999) {
            return false;
        }
        return true;
    }
}
