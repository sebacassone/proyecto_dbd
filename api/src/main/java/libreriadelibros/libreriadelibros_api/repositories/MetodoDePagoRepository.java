package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.MetodoDePago;

import java.util.List;

public interface MetodoDePagoRepository {
    // C
    MetodoDePago create(MetodoDePago metodoDePago);
    // R
    List<MetodoDePago> getAll();
    List<MetodoDePago> getBy(String id);
    // U
    String update(MetodoDePago metodoDePago, String id);
    // D
    void delete(String id);
}
