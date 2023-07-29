package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.Usuario;
import libreriadelibros.libreriadelibros_api.models.UsuarioLibro;

import java.util.List;

public interface UsuarioLibrosRepository {
    // C
    UsuarioLibro create(UsuarioLibro usuarioLibro);
    // R
    List<UsuarioLibro> getAll();
    UsuarioLibro getBy(int id);
    // U
    String update(UsuarioLibro usuarioLibro, int id);
    // D
    void delete(int id);
}
