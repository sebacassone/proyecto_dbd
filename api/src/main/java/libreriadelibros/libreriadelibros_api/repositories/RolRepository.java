package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Rol;

import java.util.List;

public interface RolRepository {
    // C
    Rol create(Rol rol);
    // R
    List<Rol> getAll();
    Rol getBy(int id);
    // U
    String update(Rol rol, int id);
    // D
    void delete(int id);
}
