package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.BoletaModel;
import com.libreriadelibros.api.services.BoletaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/boleta")
public class BoletaController {

    @Autowired
    BoletaService boletaService;

    @PostMapping
    @ResponseBody
    public ResponseEntity<BoletaModel> create(@RequestBody BoletaModel boleta){
        BoletaModel result = boletaService.create(boleta);
        try{
            return ResponseEntity.created(new URI("/boleta"+result.getIdBoleta())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<BoletaModel>> getAll(){
        return ResponseEntity.ok(boletaService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoletaModel> show(@PathVariable Long id){
        return ResponseEntity.ok(boletaService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody BoletaModel boleta, @PathVariable Long id){
        return ResponseEntity.ok(boletaService.update(boleta,id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(boletaService.delete(id));
    }


}
