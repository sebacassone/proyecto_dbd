package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.UsuarioLibroModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioLibroRepository extends CrudRepository<UsuarioLibroModel, Long> {

    UsuarioLibroModel create(UsuarioLibroModel usuarioLibro);

    List<UsuarioLibroModel> getAll();

    UsuarioLibroModel show(Long id);

    String update(UsuarioLibroModel usuarioLibro, Long id);

    String delete(Long id);

}
