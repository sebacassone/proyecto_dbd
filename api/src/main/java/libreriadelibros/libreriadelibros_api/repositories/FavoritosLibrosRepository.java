package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.FavoritosLibro;

import java.util.List;

public interface FavoritosLibrosRepository {
    // C
    FavoritosLibro create(FavoritosLibro favoritosLibro);
    // R
    List<FavoritosLibro> getAll();
    FavoritosLibro getBy(int id);
    // U
    String update(FavoritosLibro favoritosLibro, int id);
    // D
    void delete(int id);
}
