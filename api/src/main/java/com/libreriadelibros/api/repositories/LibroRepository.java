package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.LibroModel;
import com.libreriadelibros.api.models.UsuarioModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LibroRepository extends CrudRepository<LibroModel, Long> {

}
