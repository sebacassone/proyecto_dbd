package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.CarritoModel;
import com.libreriadelibros.api.services.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/carrito")
public class CarritoController {
    
    @Autowired
    CarritoService carritoService;

    @PostMapping
    @ResponseBody
    public ResponseEntity<CarritoModel> create(@RequestBody CarritoModel carrito){
        CarritoModel result = carritoService.create(carrito);
        try{
            return ResponseEntity.created(new URI("/carrito"+result.getIdCarrito())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<CarritoModel>> getAll(){
        return ResponseEntity.ok(carritoService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarritoModel> show(@PathVariable Long id){
        return ResponseEntity.ok(carritoService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody CarritoModel carrito, @PathVariable Long id){
        return ResponseEntity.ok(carritoService.update(carrito, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(carritoService.delete(id));
    }



}
