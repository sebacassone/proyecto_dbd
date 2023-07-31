package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.CarritoModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarritoRepository extends CrudRepository<CarritoModel, Long> {
}
