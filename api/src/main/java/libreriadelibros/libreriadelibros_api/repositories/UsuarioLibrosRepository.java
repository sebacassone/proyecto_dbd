package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Usuario;
import libreriadelibros.libreriadelibros_api.models.UsuarioLibro;

import java.util.List;

public interface UsuarioLibrosRepository {
    // C
    UsuarioLibro create(UsuarioLibro usuarioLibro);
    // R
    List<UsuarioLibro> getAll();
    List<UsuarioLibro> getBy(String id);
    // U
    String update(UsuarioLibro usuarioLibro, String id);
    // D
    void delete(String id);
}
