package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Categorizacion;

import java.util.List;

public interface CategorizacionRepository {
    // C
    Categorizacion create(Categorizacion categorizacion);
    // R
    List<Categorizacion> getAll();
    Categorizacion getBy(int id);
    // U
    String update(Categorizacion categorizacion, int id);
    // D
    void delete(int id);
}
