package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Favoritos;

import java.util.List;

public interface FavoritosRepository {
    // C
    Favoritos create(Favoritos favoritos);
    // R
    List<Favoritos> getAll();
    List<Favoritos> getBy(String id);
    // U
    String update(Favoritos favoritos, String id);
    // D
    void delete(String id);
}
