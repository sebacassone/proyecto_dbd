package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Carrito")
public class CarritoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Carrito",nullable = false)
    private Long idCarrito;
    @Column(name="Estado")
    private Boolean estado;

    // Relación uno a uno
    @JsonIgnore
    @OneToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NumeroTarjeta")
    private MetodoDePagoModel numeroTarjeta;

    // Relación mucho a muchos
    @JsonIgnore
    @ManyToMany(cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    @JoinTable(
            name = "CarritoLibro",
            joinColumns = {@JoinColumn(name="ID_Carrito")},
            inverseJoinColumns = {@JoinColumn(name="ID_Libro")}
    )
    private List<LibroModel> librosCarrito;

    public CarritoModel(Long idCarrito, Boolean estado, MetodoDePagoModel numeroTarjeta) {
        this.idCarrito = idCarrito;
        this.estado = estado;
        this.numeroTarjeta = numeroTarjeta;
    }

    public Long getIdCarrito() {
        return idCarrito;
    }

    public void setIdCarrito(Long idCarrito) {
        this.idCarrito = idCarrito;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public MetodoDePagoModel getNumeroTarjeta() {
        return numeroTarjeta;
    }

    public void setNumeroTarjeta(MetodoDePagoModel numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
    }
}
