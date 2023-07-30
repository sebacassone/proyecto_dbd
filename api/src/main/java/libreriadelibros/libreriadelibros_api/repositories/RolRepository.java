package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Rol;

import java.util.List;

public interface RolRepository {
    // C
    Rol create(Rol rol);
    // R
    List<Rol> getAll();
    List<Rol> getBy(String id);
    // U
    String update(Rol rol, String id);
    // D
    void delete(String id);
}
