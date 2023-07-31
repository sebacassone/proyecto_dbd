package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.LibroModel;
import com.libreriadelibros.api.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/libro")
public class LibroController {
    
    @Autowired
    LibroService libroService;


    @PostMapping
    @ResponseBody
    public ResponseEntity<LibroModel> create(@RequestBody LibroModel libro){
        LibroModel result = libroService.create(libro);
        try{
            return ResponseEntity.created(new URI("/libro"+result.getIdLibro())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<LibroModel>> getAll(){
        return ResponseEntity.ok(libroService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LibroModel> show(@PathVariable Long id){
        return ResponseEntity.ok(libroService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody LibroModel libro, @PathVariable Long id){
        return ResponseEntity.ok(libroService.update(libro, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(libroService.delete(id));
    }
    

}
