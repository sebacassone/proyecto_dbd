package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.ValoracionModel;
import com.libreriadelibros.api.repositories.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValoracionService {
    
    @Autowired
    private ValoracionRepository valoracionRepository;


    public ValoracionModel create(ValoracionModel valoracion){
        return valoracionRepository.save(valoracion);
    }

    public List<ValoracionModel> getAll(){
        return (List<ValoracionModel>) valoracionRepository.findAll();
    }

    public ValoracionModel show(Long id){
        return valoracionRepository.findById(id).get();
    }

    public String update(ValoracionModel valoracion, Long id){
        ValoracionModel valoracionUpdated;
        try {
            valoracionUpdated = show(id);
            valoracionUpdated.setComentarios(valoracion.getComentarios());
            valoracionUpdated.setPuntuacion(valoracion.getPuntuacion());
            valoracionUpdated.setUsuario(valoracion.getUsuario());
            valoracionUpdated.setLibro(valoracion.getLibro());
            valoracionRepository.save(valoracionUpdated);
            return "Valoracion actualizada";
        }catch (Exception e){
            return "No existe la valoracion de id:" + id;
        }
    }

    public String delete(Long id){
        valoracionRepository.deleteById(id);
        return "Valoracion borrada correctamente";
    }
    
}
