package com.libreriadelibros.api.services;


import com.libreriadelibros.api.models.FavoritosModel;
import com.libreriadelibros.api.repositories.FavoritosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FavoritosService {
    
    @Autowired
    private FavoritosRepository favoritosRepository;

    public FavoritosModel create(FavoritosModel favoritos){
        return favoritosRepository.save(favoritos);
    }

    public List<FavoritosModel> getAll(){
        return (List<FavoritosModel>) favoritosRepository.findAll();
    }

    public FavoritosModel show(Long id){
        return favoritosRepository.findById(id).get();
    }

    public String update(FavoritosModel favoritos, Long id){
        FavoritosModel favoritosUpdated;
        try {
            favoritosUpdated = show(id);
            favoritosUpdated.setCantidad(favoritos.getCantidad());
            favoritosUpdated.setLibrosFav(favoritos.getLibrosFav());
            favoritosRepository.save(favoritosUpdated);
            return "Favoritos actualizado";
        }catch (Exception e){
            return "No existe favoritos de id:" + id;
        }
    }

    public String delete(Long id){
        favoritosRepository.deleteById(id);
        return "Favoritos borrados correctamente";
    }
    
}
