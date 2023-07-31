package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.FavoritosModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritosRepository extends CrudRepository<FavoritosModel, Long> {

    FavoritosModel create(FavoritosModel favoritos);

    List<FavoritosModel> getAll();

    FavoritosModel show(Long id);

    String update(FavoritosModel favoritos, Long id);

    String delete(Long id);

}
