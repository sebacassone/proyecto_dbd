package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.RestriccionEdad;

import java.util.List;

public interface RestriccionEdadRespository {
    // C
    RestriccionEdad create(RestriccionEdad restriccionEdad);
    // R
    List<RestriccionEdad> getAll();
    RestriccionEdad getBy(int id);
    // U
    String update(RestriccionEdad restriccionEdad, int id);
    // D
    void delete(int id);
}
