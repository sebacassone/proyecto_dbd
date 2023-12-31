package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.CategorizacionModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorizacionRepository extends CrudRepository<CategorizacionModel, Long> {
}
