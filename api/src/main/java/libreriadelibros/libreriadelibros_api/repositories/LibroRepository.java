package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Libro;

import java.util.List;

public interface LibroRepository {
    // C
    Libro create(Libro libro);
    // R
    List<Libro> getAll();
    List<Libro> getBy(String id);
    // U
    String update(Libro libro, String id);
    // D
    void delete(String id);
}
