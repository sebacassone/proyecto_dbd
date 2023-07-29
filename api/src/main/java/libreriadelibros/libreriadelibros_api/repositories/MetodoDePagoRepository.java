package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.MetodoDePago;

import java.util.List;

public interface MetodoDePagoRepository {
    // C
    MetodoDePago create(MetodoDePago metodoDePago);
    // R
    List<MetodoDePago> getAll();
    MetodoDePago getBy(int id);
    // U
    String update(MetodoDePago metodoDePago, int id);
    // D
    void delete(int id);
}
