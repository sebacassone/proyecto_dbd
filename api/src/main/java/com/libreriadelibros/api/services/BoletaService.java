package com.libreriadelibros.api.services;

import com.libreriadelibros.api.repositories.BoletaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.libreriadelibros.api.models.BoletaModel;
import java.util.List;

@Service
public class BoletaService {
    @Autowired
    private BoletaRepository boletaRepository;

    public BoletaModel create(BoletaModel boleta){
        return boletaRepository.save(boleta);
    }

    public List<BoletaModel> getAll(){
        return (List<BoletaModel>) boletaRepository.findAll();
    }

    public BoletaModel show(Long id){
        return boletaRepository.findById(id).get();
    }

    public String update(BoletaModel boleta, Long id){
        BoletaModel boletaUpdated;
        try {
            boletaUpdated = show(id);
            boletaUpdated.setCarrito(boleta.getCarrito());
            boletaUpdated.setMonto(boleta.getMonto());
            boletaRepository.save(boletaUpdated);
            return "Boleta actualizada";
        }catch (Exception e){
            return "No existe la boleta de id:" + id;
        }
    }

    public String delete(Long id){
        boletaRepository.deleteById(id);
        return "Boleta borrada correctamente";
    }



}
