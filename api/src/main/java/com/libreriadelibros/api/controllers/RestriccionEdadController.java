package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.RestriccionEdadModel;
import com.libreriadelibros.api.services.RestriccionEdadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/restriccionEdad")
public class RestriccionEdadController {
    
    @Autowired
    RestriccionEdadService restriccionEdadService;

    @PostMapping
    @ResponseBody
    public ResponseEntity<RestriccionEdadModel> create(@RequestBody RestriccionEdadModel restriccionEdad){
        RestriccionEdadModel result = restriccionEdadService.create(restriccionEdad);
        try{
            return ResponseEntity.created(new URI("/restriccionEdad"+result.getIdRestriccionEdad())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<RestriccionEdadModel>> getAll(){
        return ResponseEntity.ok(restriccionEdadService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestriccionEdadModel> show(@PathVariable Long id){
        return ResponseEntity.ok(restriccionEdadService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody RestriccionEdadModel restriccionEdad, @PathVariable Long id){
        return ResponseEntity.ok(restriccionEdadService.update(restriccionEdad, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(restriccionEdadService.delete(id));
    }




}
