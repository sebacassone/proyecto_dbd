package com.libreriadelibros.api.repositories;

import com.libreriadelibros.api.models.UbicacionGeoModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UbicacionGeoRepository extends CrudRepository<UbicacionGeoModel, Long> {
}
