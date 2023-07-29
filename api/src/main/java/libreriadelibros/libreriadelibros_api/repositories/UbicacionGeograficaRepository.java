package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.UbicacionGeografica;

import java.util.List;

public interface UbicacionGeograficaRepository {
    // C
    UbicacionGeografica create(UbicacionGeografica ubicacionGeografica);
    // R
    List<UbicacionGeografica> getAll();
    UbicacionGeografica getBy(int id);
    // U
    String update(UbicacionGeografica ubicacionGeografica, int id);
    // D
    void delete(int id);
}
