package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.ValoracionModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValoracionRepository extends CrudRepository<ValoracionModel, Long> {
}
