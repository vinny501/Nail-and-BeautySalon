package za.ac.cput.nailbeautysalon.service;

import java.util.List;

/**
 * author: Nandipha Galada
 * student number: 221225366
 * date: 03 July 2026
 * Class for IServiceService
 */

public interface IServiceService<T, ID> {

    T create(T t);

    T read(ID id);

    T update(T t);

    boolean delete(ID id);

    List<T> getAll();
}
