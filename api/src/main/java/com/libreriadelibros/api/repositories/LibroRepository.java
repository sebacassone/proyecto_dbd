package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.LibroModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepository extends CrudRepository<LibroModel, Long> {
}
