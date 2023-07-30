package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.CarritoLibro;

import java.util.List;

public interface CarritoLibroRepository {
    // C
    CarritoLibro create(CarritoLibro CarritoLibro);
    // R
    List<CarritoLibro> getAll();
    List<CarritoLibro> getBy(String id);
    //
    String update(CarritoLibro CarritoLibro, String id);
    // D
    void delete(String id);
}
