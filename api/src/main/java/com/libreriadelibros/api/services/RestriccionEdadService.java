package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.RestriccionEdadModel;
import com.libreriadelibros.api.repositories.RestriccionEdadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestriccionEdadService {
    
    @Autowired
    private RestriccionEdadRepository restriccionEdadRepository;
    
    public RestriccionEdadModel create(RestriccionEdadModel restriccionEdad){
        return restriccionEdadRepository.save(restriccionEdad);
    }

    public List<RestriccionEdadModel> getAll(){
        return (List<RestriccionEdadModel>) restriccionEdadRepository.findAll();
    }

    public RestriccionEdadModel show(Long id){
        return restriccionEdadRepository.findById(id).get();
    }

    public String update(RestriccionEdadModel restriccionEdad, Long id){
        RestriccionEdadModel restriccionEdadUpdated;
        try {
            restriccionEdadUpdated = show(id);
            restriccionEdadUpdated.setEdad(restriccionEdad.getEdad());
            restriccionEdadRepository.save(restriccionEdadUpdated);
            return "Restriccion de edad actualizada";
        }catch (Exception e){
            return "No existe la restriccion de edad de id:" + id;
        }
    }

    public String delete(Long id){
        restriccionEdadRepository.deleteById(id);
        return "Restriccion de edad borrada correctamente";
    }
    
}
