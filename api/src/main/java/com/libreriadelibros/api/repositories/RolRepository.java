package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.RolModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RolRepository extends CrudRepository<RolModel, Long> {

    RolModel create(RolModel boleta);

    List<RolModel> getAll();

    RolModel show(Long id);

    String update(RolModel rol, Long id);

    String delete(Long id);

}
