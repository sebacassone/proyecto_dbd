package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface BoletaRepository {
    // C
    Boleta create(Boleta Boleta);
    // R
    List<Boleta> getAll();
    List<Boleta> getBy(String id);
    // U
    String update(Boleta Boleta, String id);
    // D
    void delete(String id);
}
