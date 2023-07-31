package com.libreriadelibros.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "UbicacionGeo")
public class UbicacionGeoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_UbicacionGeo", nullable = false)
    private Integer idUbicacionGeo;
    @Column(name="paisOrigen")
    private String paisOrigen;
    @Column(name= "ciudad")
    private String ciudad;
    @Column(name="codigoPostal")
    private String codigoPostal;

    public UbicacionGeoModel(Integer idUbicacionGeo, String paisOrigen, String ciudad, String codigoPostal) {
        this.idUbicacionGeo = idUbicacionGeo;
        this.paisOrigen = paisOrigen;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    public Integer getIdUbicacionGeo() {
        return idUbicacionGeo;
    }

    public void setIdUbicacionGeo(Integer idUbicacionGeo) {
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
