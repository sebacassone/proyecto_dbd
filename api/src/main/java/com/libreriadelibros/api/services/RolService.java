package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.RolModel;
import com.libreriadelibros.api.repositories.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolService {

    @Autowired
    private RolRepository rolRepository;
    
    public RolModel create(RolModel boleta){
        return rolRepository.save(boleta);
    }

    public List<RolModel> getAll(){
        System.out.println(rolRepository.findAll());
        return (List<RolModel>) rolRepository.findAll();
    }

    public RolModel show(Long id){
        return rolRepository.findById(id).get();
    }

    public String update(RolModel rol, Long id){
        RolModel rolUpdated;
        try {
            rolUpdated = show(id);
            rolUpdated.setNombreRol(rol.getNombreRol());
            rolUpdated.setUsuariosRol(rol.getUsuariosRol());
            rolRepository.save(rolUpdated);
            return "Rol actualizada";
        }catch (Exception e){
            return "No existe el rol de id:" + id;
        }
    }

    public String delete(Long id){
        rolRepository.deleteById(id);
        return "Rol borrado correctamente";
    }

}
