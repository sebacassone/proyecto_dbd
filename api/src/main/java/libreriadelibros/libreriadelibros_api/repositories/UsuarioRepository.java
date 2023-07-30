package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Usuario;

import java.util.List;

public interface UsuarioRepository {
    // C
    Usuario create(Usuario usuario);
    // R
    List<Usuario> getAll();
    List<Usuario> getBy(String id);
    // U
    String update(Usuario usuario, String id);
    // D
    void delete(String id);
}
