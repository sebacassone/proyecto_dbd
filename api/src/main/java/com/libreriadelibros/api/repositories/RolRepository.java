package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.RolModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends CrudRepository<RolModel, Long> {
}
