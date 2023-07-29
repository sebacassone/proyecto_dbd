package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Usuario;

import java.util.List;

public interface UsuarioRepository {
    // C
    Usuario create(Usuario usuario);
    // R
    List<Usuario> getAll();
    Usuario getBy(int id);
    // U
    String update(Usuario usuario, int id);
    // D
    void delete(int id);
}
