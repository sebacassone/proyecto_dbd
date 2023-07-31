package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.CategorizacionModel;
import com.libreriadelibros.api.models.CategorizacionModel;
import com.libreriadelibros.api.repositories.CategorizacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorizacionService {

    @Autowired
    private CategorizacionRepository categorizacionRepository;


    public CategorizacionModel create(CategorizacionModel categorizacion){
        return categorizacionRepository.save(categorizacion);
    }

    public List<CategorizacionModel> getAll(){
        return (List<CategorizacionModel>) categorizacionRepository.findAll();
    }

    public CategorizacionModel show(Long id){
        return categorizacionRepository.findById(id).get();
    }

    public String update(CategorizacionModel categorizacion, Long id){
        CategorizacionModel categorizacionUpdated;
        try {
            categorizacionUpdated = show(id);
            categorizacionUpdated.setGenero(categorizacion.getGenero());
            categorizacionUpdated.setLibros(categorizacion.getLibros());
            categorizacionRepository.save(categorizacionUpdated);
            return "Categorizacin actualizada";
        }catch (Exception e){
            return "No existe la categorizacion de id:" + id;
        }
    }

    public String delete(Long id){
        categorizacionRepository.deleteById(id);
        return "Categorizacion borrada correctamente";
    }

}
