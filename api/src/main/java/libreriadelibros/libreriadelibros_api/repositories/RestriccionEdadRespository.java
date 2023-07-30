package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.RestriccionEdad;

import java.util.List;

public interface RestriccionEdadRespository {
    // C
    RestriccionEdad create(RestriccionEdad restriccionEdad);
    // R
    List<RestriccionEdad> getAll();
    List<RestriccionEdad> getBy(String id);
    // U
    String update(RestriccionEdad restriccionEdad, String id);
    // D
    void delete(String id);
}
