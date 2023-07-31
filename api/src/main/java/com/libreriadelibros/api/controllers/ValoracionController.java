package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.ValoracionModel;
import com.libreriadelibros.api.services.ValoracionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/valoracion")
public class ValoracionController {

    @Autowired
    ValoracionService valoracionService;
    
    @PostMapping
    @ResponseBody
    public ResponseEntity<ValoracionModel> create(@RequestBody ValoracionModel valoracion){
        ValoracionModel result = valoracionService.create(valoracion);
        try{
            return ResponseEntity.created(new URI("/valoracion"+result.getIdValoracion())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<ValoracionModel>> getAll(){
        return ResponseEntity.ok(valoracionService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ValoracionModel> show(@PathVariable Long id){
        return ResponseEntity.ok(valoracionService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody ValoracionModel valoracion, @PathVariable Long id){
        return ResponseEntity.ok(valoracionService.update(valoracion, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(valoracionService.delete(id));
    }


}
