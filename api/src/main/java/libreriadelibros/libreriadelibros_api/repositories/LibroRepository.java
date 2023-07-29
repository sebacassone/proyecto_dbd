package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Libro;

import java.util.List;

public interface LibroRepository {
    // C
    Libro create(Libro libro);
    // R
    List<Libro> getAll();
    Libro getBy(int it);
    // U
    String update(Libro libro, int id);
    // D
    void delete(int id);
}
