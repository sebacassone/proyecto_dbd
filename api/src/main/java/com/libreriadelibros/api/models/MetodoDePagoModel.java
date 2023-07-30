package com.libreriadelibros.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="MetodoDePago")
public class MetodoDePagoModel {
    @Id
    @Column(nullable = false)
    private Long numeroDeTarjeta;
    private String nombre;
    private String titular;
    private Integer cvv;
    private String fechaExpiracion;

    public MetodoDePagoModel(Long numeroDeTarjeta, String nombre, String titular, Integer cvv, String fechaExpiracion) {
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.nombre = nombre;
        this.titular = titular;
        this.cvv = cvv;
        this.fechaExpiracion = fechaExpiracion;
    }

    public Long getNumeroDeTarjeta() {
        return numeroDeTarjeta;
    }

    public void setNumeroDeTarjeta(Long numeroDeTarjeta) {
        this.numeroDeTarjeta = numeroDeTarjeta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public Integer getCvv() {
        return cvv;
    }

    public void setCvv(Integer cvv) {
        this.cvv = cvv;
    }

    public String getFechaExpiracion() {
        return fechaExpiracion;
    }

    public void setFechaExpiracion(String fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }
}
