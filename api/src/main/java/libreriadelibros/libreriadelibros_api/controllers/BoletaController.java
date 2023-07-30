package libreriadelibros.libreriadelibros_api.controllers;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.repositories.BoletaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class BoletaController {

    @Autowired
    BoletaRepository boletaRepository;

    BoletaController(BoletaRepository boletaRepository) {
        this.boletaRepository = boletaRepository;
    }

    @PostMapping("/Boleta")
    @ResponseBody
    public Boleta create(@RequestBody Boleta boleta){
        return boletaRepository.create(boleta);
    }

    @GetMapping("/SitemaLibros/Boleta")
    public List<Boleta> getAll(){return this.boletaRepository.getAll();}

}
