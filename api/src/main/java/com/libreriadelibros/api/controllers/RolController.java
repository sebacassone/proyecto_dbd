package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.RolModel;
import com.libreriadelibros.api.services.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/rol")
public class RolController {
    
    @Autowired
    RolService rolService;

    @PostMapping
    @ResponseBody
    public ResponseEntity<RolModel> create(@RequestBody RolModel rol){
        RolModel result = rolService.create(rol);
        try{
            return ResponseEntity.created(new URI("/rol"+result.getIdRol())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<RolModel>> getAll(){
        return ResponseEntity.ok(rolService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RolModel> show(@PathVariable Long id){
        return ResponseEntity.ok(rolService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody RolModel rol, @PathVariable Long id){
        return ResponseEntity.ok(rolService.update(rol, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(rolService.delete(id));
    }




}
