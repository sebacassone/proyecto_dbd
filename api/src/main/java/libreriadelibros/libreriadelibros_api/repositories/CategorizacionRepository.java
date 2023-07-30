package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Categorizacion;

import java.util.List;

public interface CategorizacionRepository {
    // C
    Categorizacion create(Categorizacion categorizacion);
    // R
    List<Categorizacion> getAll();
    List<Categorizacion> getBy(String id);
    // U
    String update(Categorizacion categorizacion, String id);
    // D
    void delete(String id);
}
