package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Boleta")
public class BoletaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Boleta", nullable = false)
    private Integer idBoleta;
    @Column(name="Monto")
    private Integer monto;

    // Relación uno a uno
    @JsonIgnore
    @OneToOne(mappedBy = "boleta")
    @JoinColumn(name = "ID_Carrito")
    private CarritoModel carrito;

    // Relación de muchos a uno
    @JsonIgnore
    @ManyToOne()
    private UsuarioModel usuarioBoleta;

    public BoletaModel(Integer idBoleta, Integer monto, CarritoModel carrito) {
        this.idBoleta = idBoleta;
        this.monto = monto;
        this.carrito = carrito;
    }

    public Integer getIdBoleta() {
        return idBoleta;
    }

    public void setIdBoleta(Integer idBoleta) {
        this.idBoleta = idBoleta;
    }

    public Integer getMonto() {
        return monto;
    }

    public void setMonto(Integer monto) {
        this.monto = monto;
    }

    public CarritoModel getCarrito() {
        return carrito;
    }

    public void setCarrito(CarritoModel carrito) {
        this.carrito = carrito;
    }
}
