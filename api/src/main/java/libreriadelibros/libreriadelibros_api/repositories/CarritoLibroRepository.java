package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.CarritoLibro;

import java.util.List;

public interface CarritoLibroRepository {
    // C
    CarritoLibro create(CarritoLibro CarritoLibro);
    // R
    List<CarritoLibro> getAll();
    CarritoLibro getBy(int id);
    // U
    String update(CarritoLibro CarritoLibro, int id);
    // D
    void delete(int id);
}
