package za.ac.cput.nailbeautysalon.domain;
/* User.java
User class
Author: Vincent Kanzi(221188932)
Date: 21 June 2026
*/
import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class User {
    @Id
    protected String userId;
    protected String firstName;
    protected String lastName;
    protected String email;
    protected String cellNumber;


    @Override
    public abstract String toString();
}
