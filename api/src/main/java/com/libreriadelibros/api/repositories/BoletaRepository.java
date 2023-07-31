package com.libreriadelibros.api.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.libreriadelibros.api.models.BoletaModel;

import java.util.List;

@Repository
public interface BoletaRepository extends CrudRepository<BoletaModel, Long> {
}

