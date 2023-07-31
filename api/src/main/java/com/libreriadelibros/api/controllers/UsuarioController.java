package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.UsuarioModel;
import com.libreriadelibros.api.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {
    
    @Autowired
    UsuarioService usuarioService;
    
    @PostMapping
    @ResponseBody
    public ResponseEntity<UsuarioModel> create(@RequestBody UsuarioModel usuario){
        UsuarioModel result = usuarioService.create(usuario);
        try{
            return ResponseEntity.created(new URI("/usuario"+result.getIdUsuario())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<UsuarioModel>> getAll(){
        return ResponseEntity.ok(usuarioService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioModel> show(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody UsuarioModel usuario, @PathVariable Long id){
        return ResponseEntity.ok(usuarioService.update(usuario, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.delete(id));
    }



}
