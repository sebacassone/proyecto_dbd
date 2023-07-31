package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.FavoritosModel;
import com.libreriadelibros.api.services.FavoritosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/favoritos")
public class FavoritosController {
    
    @Autowired
    FavoritosService favoritosService;


    @PostMapping
    @ResponseBody
    public ResponseEntity<FavoritosModel> create(@RequestBody FavoritosModel favoritos){
        FavoritosModel result = favoritosService.create(favoritos);
        try{
            return ResponseEntity.created(new URI("/favoritos"+result.getIdFavoritos())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<FavoritosModel>> getAll(){
        return ResponseEntity.ok(favoritosService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FavoritosModel> show(@PathVariable Long id){
        return ResponseEntity.ok(favoritosService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody FavoritosModel favoritos, @PathVariable Long id){
        return ResponseEntity.ok(favoritosService.update(favoritos, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(favoritosService.delete(id));
    }



}
