package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Valoracion;
import java.util.List;

public interface ValoracionRepository {
    // C
    Valoracion create(Valoracion valoracion);
    // R
    List<Valoracion> getAll();
    Valoracion getBy(int id);
    // U
    String update(Valoracion valoracion, int id);
    // D
    void delete(int id);
}
