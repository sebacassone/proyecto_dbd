package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.MetodoDePagoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.libreriadelibros.api.repositories.MetodoDePagoRepository;

import java.util.List;

@Service
public class MetodoDePagoService {
    @Autowired
    MetodoDePagoRepository metodoDePagoRepository;

    public MetodoDePagoModel create(MetodoDePagoModel metodoDePago){
        return metodoDePagoRepository.save(metodoDePago);
    }

    public List<MetodoDePagoModel> getAll(){
        return (List<MetodoDePagoModel>) metodoDePagoRepository.findAll();
    }

    public MetodoDePagoModel show(Long id){
        return metodoDePagoRepository.findById(id).get();
    }

    public String update(MetodoDePagoModel metodoDePago, Long id){
        MetodoDePagoModel metodoDePagoUpdated;
        try {
            metodoDePagoUpdated = show(id);
            metodoDePagoUpdated.setNombre(metodoDePago.getNombre());
            metodoDePagoUpdated.setTitular(metodoDePago.getTitular());
            metodoDePagoUpdated.setCvv(metodoDePago.getCvv());
            metodoDePagoUpdated.setFechaExpiracion(metodoDePago.getFechaExpiracion());
            metodoDePagoUpdated.setUsuariosMetodoPago(metodoDePago.getUsuariosMetodoPago());
            metodoDePagoRepository.save(metodoDePagoUpdated);
            return "Metodo de pago actualizado";
        }catch (Exception e){
            return "No existe un metodo de pago de id:" + id;
        }
    }

    public String delete(Long id){
        metodoDePagoRepository.deleteById(id);
        return "Metodo de pago borrado correctamente";
    }
    

}
