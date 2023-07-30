package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.UsuarioLibro;
import libreriadelibros.libreriadelibros_api.models.UsuarioPago;

import java.util.List;

public interface UsuarioPagoRepository {
    // C
    UsuarioPago create(UsuarioPago usuarioPago);
    // R
    List<UsuarioPago> getAll();
    List<UsuarioPago> getBy(String id);
    // U
    String update(UsuarioPago usuarioPago, String id);
    // D
    void delete(String id);
}
