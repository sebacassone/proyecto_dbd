package com.libreriadelibros.api.controllers;

import com.libreriadelibros.api.models.CategorizacionModel;
import com.libreriadelibros.api.services.CategorizacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/categorizacion")
public class CategorizacionController {
    
    @Autowired
    CategorizacionService categorizacionService;
    
    @PostMapping
    @ResponseBody
    public ResponseEntity<CategorizacionModel> create(@RequestBody CategorizacionModel categorizacion){
        CategorizacionModel result = categorizacionService.create(categorizacion);
        try{
            return ResponseEntity.created(new URI("/categorizacion"+result.getIdCategorizacion())).body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<CategorizacionModel>> getAll(){
        return ResponseEntity.ok(categorizacionService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategorizacionModel> show(@PathVariable Long id){
        return ResponseEntity.ok(categorizacionService.show(id));
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> update(@RequestBody CategorizacionModel categorizacion, @PathVariable Long id){
        return ResponseEntity.ok(categorizacionService.update(categorizacion,id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        return ResponseEntity.ok(categorizacionService.delete(id));
    }


}
