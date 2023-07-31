package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.UbicacionGeoModel;
import com.libreriadelibros.api.services.UbicacionGeoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/ubiacacionGeo")
public class UbicacionGeoController {

    @Autowired
    UbicacionGeoService ubicacionGeoService;


    @PostMapping
    @ResponseBody
    public ResponseEntity<UbicacionGeoModel> create(@RequestBody UbicacionGeoModel ubicacionGeo){
        UbicacionGeoModel result = ubicacionGeoService.create(ubicacionGeo);
        try{
            return ResponseEntity.created(new URI("/ubiacacionGeo"+result.getIdUbicacionGeo())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<UbicacionGeoModel>> getAll(){
        return ResponseEntity.ok(ubicacionGeoService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UbicacionGeoModel> show(@PathVariable Long id){
        return ResponseEntity.ok(ubicacionGeoService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody UbicacionGeoModel ubicacionGeo, @PathVariable Long id){
        return ResponseEntity.ok(ubicacionGeoService.update(ubicacionGeo, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(ubicacionGeoService.delete(id));
    }


}
