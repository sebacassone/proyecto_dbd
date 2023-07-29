package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Categorizacion;
import libreriadelibros.libreriadelibros_api.models.CategorizacionLibro;

import java.util.List;

public interface CategorizacionLibroRepository {
    // C
    CategorizacionLibro create(CategorizacionLibro categorizacionLibro);
    // R
    List<CategorizacionLibro> getAll();
    CategorizacionLibro getBy(int id);
    // U
    CategorizacionLibro update(CategorizacionLibro categorizacionLibro, int id);
    // D
    void delete(int id);
}
