package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.MetodoDePagoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.libreriadelibros.api.services.MetodoDePagoService;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/metodoDePago")
public class MetodoDePagoController {
    
    @Autowired
    MetodoDePagoService metodoDePagoService;
    
    @PostMapping
    @ResponseBody
    public ResponseEntity<MetodoDePagoModel> create(@RequestBody MetodoDePagoModel nroTarjeta){
        MetodoDePagoModel result = metodoDePagoService.create(nroTarjeta);
        try{
            return ResponseEntity.created(new URI("/metodoDePago"+result.getNumeroDeTarjeta())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<MetodoDePagoModel>> getAll(){
        return ResponseEntity.ok(metodoDePagoService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MetodoDePagoModel> show(@PathVariable Long id){
        return ResponseEntity.ok(metodoDePagoService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody MetodoDePagoModel nroTarjeta, @PathVariable Long id){
        return ResponseEntity.ok(metodoDePagoService.update(nroTarjeta, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(metodoDePagoService.delete(id));
    }





}
