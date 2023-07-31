package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.UsuarioModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long> {

    UsuarioModel create(UsuarioModel usuario);

    List<UsuarioModel> getAll();

    UsuarioModel show(Long id);

    String update(UsuarioModel usuario, Long id);

    String delete(Long id);

}
