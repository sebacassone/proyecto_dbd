package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.UsuarioLibroModel;
import com.libreriadelibros.api.repositories.UsuarioLibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioLibroService {
    
    @Autowired
    private UsuarioLibroRepository usuarioLibroRepository;


    public UsuarioLibroModel create(UsuarioLibroModel usuarioLibro){
        return usuarioLibroRepository.save(usuarioLibro);
    }

    public List<UsuarioLibroModel> getAll(){
        return (List<UsuarioLibroModel>) usuarioLibroRepository.findAll();
    }

    public UsuarioLibroModel show(Long id){
        return usuarioLibroRepository.findById(id).get();
    }

    public String update(UsuarioLibroModel usuarioLibro, Long id){
        UsuarioLibroModel usuarioLibroUpdated;
        try {
            usuarioLibroUpdated = show(id);
            usuarioLibroUpdated.setEscrito(usuarioLibro.getEscrito());
            usuarioLibroUpdated.setUsuarioLib(usuarioLibro.getUsuarioLib());
            usuarioLibroUpdated.setLibroUser(usuarioLibro.getLibroUser());
            usuarioLibroRepository.save(usuarioLibroUpdated);
            return "UsuarioLibro actualizada";
        }catch (Exception e){
            return "No existe el usuarioLibro de id:" + id;
        }
    }

    public String delete(Long id){
        usuarioLibroRepository.deleteById(id);
        return "Usuario libro borrado correctamente";
    }
    
    
}
