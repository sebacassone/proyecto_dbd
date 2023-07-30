package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Valoracion;
import java.util.List;

public interface ValoracionRepository {
    // C
    Valoracion create(Valoracion valoracion);
    // R
    List<Valoracion> getAll();
    List<Valoracion> getBy(String id);
    // U
    String update(Valoracion valoracion, String id);
    // D
    void delete(String id);
}
