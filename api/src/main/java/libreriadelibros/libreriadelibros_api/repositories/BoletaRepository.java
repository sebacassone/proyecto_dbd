package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import java.util.List;

public interface BoletaRepository {
    // C
    Boleta create(Boleta Boleta);
    // R
    List<Boleta> getAll();
    Boleta getBy(int id);
    // U
    String update(Boleta Boleta, int id);
    // D
    void delete(int id);

}
