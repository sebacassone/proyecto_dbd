package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.UbicacionGeoModel;
import com.libreriadelibros.api.repositories.UbicacionGeoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UbicacionGeoService {
    
    @Autowired
    private UbicacionGeoRepository ubicacionGeoRepository;

    
    public UbicacionGeoModel create(UbicacionGeoModel ubicacionGeo){
        return ubicacionGeoRepository.save(ubicacionGeo);
    }

    public List<UbicacionGeoModel> getAll(){
        return (List<UbicacionGeoModel>) ubicacionGeoRepository.findAll();
    }

    public UbicacionGeoModel show(Long id){
        return ubicacionGeoRepository.findById(id).get();
    }

    public String update(UbicacionGeoModel ubicacionGeo, Long id){
        UbicacionGeoModel ubicacionGeoUpdated;
        try {
            ubicacionGeoUpdated = show(id);
            ubicacionGeoUpdated.setPaisOrigen(ubicacionGeo.getPaisOrigen());
            ubicacionGeoUpdated.setCiudad(ubicacionGeo.getCiudad());
            ubicacionGeoUpdated.setCodigoPostal(ubicacionGeo.getCodigoPostal());
            ubicacionGeoRepository.save(ubicacionGeoUpdated);
            return "Ubicacion geografica actualizada";
        }catch (Exception e){
            return "No existe la ubicacion geografica de id:" + id;
        }
    }

    public String delete(Long id){
        ubicacionGeoRepository.deleteById(id);
        return "Ubicacion geografica borrada correctamente";
    }
    
}
