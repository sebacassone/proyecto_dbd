package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.RestriccionEdadModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestriccionEdadRepository extends CrudRepository<RestriccionEdadModel, Long> {
}
