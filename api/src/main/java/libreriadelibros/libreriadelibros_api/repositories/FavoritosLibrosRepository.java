package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.FavoritosLibro;

import java.util.List;

public interface FavoritosLibrosRepository {
    // C
    FavoritosLibro create(FavoritosLibro favoritosLibro);
    // R
    List<FavoritosLibro> getAll();
    List<FavoritosLibro> getBy(String id);
    // U
    String update(FavoritosLibro favoritosLibro, String id);
    // D
    void delete(String id);
}
