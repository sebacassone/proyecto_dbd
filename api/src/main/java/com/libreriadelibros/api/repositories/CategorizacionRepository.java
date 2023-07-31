package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.CategorizacionModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorizacionRepository extends CrudRepository<CategorizacionModel, Long> {

    CategorizacionModel create(CategorizacionModel categorizacion);

    List<CategorizacionModel> getAll();

    CategorizacionModel show(Long id);

    String update(CategorizacionModel categorizacion, Long id);

    String delete(Long id);

}
