package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Categorizacion;
import libreriadelibros.libreriadelibros_api.models.CategorizacionLibro;

import java.util.List;

public interface CategorizacionLibroRepository {
    // C
    CategorizacionLibro create(CategorizacionLibro categorizacionLibro);
    // R
    List<CategorizacionLibro> getAll();
    List<CategorizacionLibro> getBy(String id);
    // U
    String update(CategorizacionLibro categorizacionLibro, String id);
    // D
    void delete(String id);
}
