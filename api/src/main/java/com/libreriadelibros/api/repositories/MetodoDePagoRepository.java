package com.libreriadelibros.api.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.libreriadelibros.api.models.MetodoDePagoModel;

import java.util.List;

@Repository
public interface MetodoDePagoRepository extends CrudRepository<MetodoDePagoModel, Long> {



}
