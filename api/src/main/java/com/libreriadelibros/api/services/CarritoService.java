package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.CarritoModel;
import com.libreriadelibros.api.repositories.CarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarritoService {

    @Autowired
    private CarritoRepository carritoRepository;


    public CarritoModel create(CarritoModel boleta){
        return carritoRepository.save(boleta);
    }

    public List<CarritoModel> getAll(){
        return (List<CarritoModel>) carritoRepository.findAll();
    }

    public CarritoModel show(Long id){
        return carritoRepository.findById(id).get();
    }

    public String update(CarritoModel carrito, Long id){
        CarritoModel carritoUpdated;
        try {
            carritoUpdated = show(id);
            carritoUpdated.setEstado(carrito.getEstado());
            carritoUpdated.setNumeroTarjeta(carrito.getNumeroTarjeta());
            carritoUpdated.setLibrosCarrito(carrito.getLibrosCarrito());
            carritoRepository.save(carritoUpdated);
            return "Carrito actualizado";
        }catch (Exception e){
            return "No existe el carrito de id:" + id;
        }
    }

    public String delete(Long id){
        carritoRepository.deleteById(id);
        return "Carrito borrado correctamente";
    }
}
