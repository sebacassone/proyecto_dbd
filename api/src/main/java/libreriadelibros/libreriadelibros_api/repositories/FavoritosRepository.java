package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Favoritos;

import java.util.List;

public interface FavoritosRepository {
    // C
    Favoritos create(Favoritos favoritos);
    // R
    List<Favoritos> getAll();
    Favoritos getBy(int id);
    // U
    String update(Favoritos favoritos, int id);
    // D
    void delete(int id);
}
