package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Carrito")
public class CarritoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long idCarrito;
    private Boolean estado;
    private Long numeroTarjeta;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "numeroDeTarjeta")
    private MetodoDePagoModel metodoDePago;

}
