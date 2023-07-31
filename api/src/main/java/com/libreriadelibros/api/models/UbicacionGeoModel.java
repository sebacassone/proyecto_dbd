package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "UbicacionGeo")
public class UbicacionGeoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_UbicacionGeo", nullable = false)
    private Long idUbicacionGeo;
    @Column(name="paisOrigen")
    private String paisOrigen;
    @Column(name= "ciudad")
    private String ciudad;
    @Column(name="codigoPostal")
    private String codigoPostal;

    // Relación uno a uno (Esta no tiene la llave foranea)
    @JsonIgnore
    @OneToOne(mappedBy = "idUbicacionGeo")
    private LibroModel libroUbicacion;

    public UbicacionGeoModel(Long idUbicacionGeo, String paisOrigen, String ciudad, String codigoPostal) {
        this.idUbicacionGeo = idUbicacionGeo;
        this.paisOrigen = paisOrigen;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    public Long getIdUbicacionGeo() {
        return idUbicacionGeo;
    }

    public void setIdUbicacionGeo(Long idUbicacionGeo) {
        this.idUbicacionGeo = idUbicacionGeo;
    }

    public String getPaisOrigen() {
        return paisOrigen;
    }

    public void setPaisOrigen(String paisOrigen) {
        this.paisOrigen = paisOrigen;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
}
