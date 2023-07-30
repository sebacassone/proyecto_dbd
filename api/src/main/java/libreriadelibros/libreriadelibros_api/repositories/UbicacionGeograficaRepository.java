package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.UbicacionGeografica;

import java.util.List;

public interface UbicacionGeograficaRepository {
    // C
    UbicacionGeografica create(UbicacionGeografica ubicacionGeografica);
    // R
    List<UbicacionGeografica> getAll();
    List<UbicacionGeografica> getBy(String id);
    // U
    String update(UbicacionGeografica ubicacionGeografica, String id);
    // D
    void delete(String id);
}
