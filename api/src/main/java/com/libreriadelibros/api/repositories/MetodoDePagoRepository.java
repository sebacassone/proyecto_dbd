package com.libreriadelibros.api.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.libreriadelibros.api.models.MetodoDePagoModel;

import java.util.List;

@Repository
public interface MetodoDePagoRepository extends CrudRepository<MetodoDePagoModel, Long> {

    MetodoDePagoModel create(MetodoDePagoModel metodoDePago);

    List<MetodoDePagoModel> getAll();

    MetodoDePagoModel show(Long id);

    String update(MetodoDePagoModel metodoDePago, Long id);

    String delete(Long id);


}
