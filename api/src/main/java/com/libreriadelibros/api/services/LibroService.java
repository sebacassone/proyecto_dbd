package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.LibroModel;
import com.libreriadelibros.api.repositories.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroService {
    
    @Autowired
    private LibroRepository libroRepository;

    public LibroModel create(LibroModel libro){
        return libroRepository.save(libro);
    }

    public List<LibroModel> getAll(){
        return (List<LibroModel>) libroRepository.findAll();
    }

    public LibroModel show(Long id){
        return libroRepository.findById(id).get();
    }

    public String update(LibroModel libro, Long id){
        LibroModel libroUpdated;
        try {
            libroUpdated = show(id);
            libroUpdated.setTitulo(libro.getTitulo());
            libroUpdated.setStock(libro.getStock());
            libroUpdated.setPrecio(libro.getPrecio());
            libroUpdated.setVistas(libro.getVistas());
            libroUpdated.setLink(libro.getLink());
            libroUpdated.setIdioma(libro.getIdioma());
            libroUpdated.setIdRestriccionEdad(libro.getIdRestriccionEdad());
            libroUpdated.setIdUbicacionGeo(libro.getIdUbicacionGeo());
//            libroUpdated.getCategorizaciones(libro.getCategorizaciones());
//            libroUpdated.getFavoritos(libro.getFavoritos());
//            libroUpdated.getCarritos(libro.getCarritos());
//            libroUpdated.getUsuarios(libro.getUsuarios());
            libroRepository.save(libroUpdated);
            return "Libro actualizado";
        }catch (Exception e){
            return "No existe el libro de id:" + id;
        }
    }

    public String delete(Long id){
        libroRepository.deleteById(id);
        return "Libro borrado correctamente";
    }
    
    
}
