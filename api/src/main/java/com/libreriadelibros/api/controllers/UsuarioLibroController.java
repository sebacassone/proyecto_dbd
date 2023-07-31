package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.UsuarioLibroModel;
import com.libreriadelibros.api.services.UsuarioLibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/usuarioLibro")
public class UsuarioLibroController {
    
    @Autowired
    UsuarioLibroService usuarioLibroService;


    @PostMapping
    @ResponseBody
    public ResponseEntity<UsuarioLibroModel> create(@RequestBody UsuarioLibroModel usuarioLibro){
        UsuarioLibroModel result = usuarioLibroService.create(usuarioLibro);
        try{
            return ResponseEntity.created(new URI("/usuarioLibro"+result.getId())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<UsuarioLibroModel>> getAll(){
        return ResponseEntity.ok(usuarioLibroService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioLibroModel> show(@PathVariable Long id){
        return ResponseEntity.ok(usuarioLibroService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody UsuarioLibroModel usuarioLibro, @PathVariable Long id){
        return ResponseEntity.ok(usuarioLibroService.update(usuarioLibro, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(usuarioLibroService.delete(id));
    }


}
