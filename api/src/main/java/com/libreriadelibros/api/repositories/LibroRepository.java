package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.LibroModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LibroRepository extends CrudRepository<LibroModel, Long> {

    LibroModel create(LibroModel libro);

    List<LibroModel> getAll();

    LibroModel show(Long id);

    String update(LibroModel libro, Long id);

    String delete(Long id);

}
