package com.libreriadelibros.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "RestriccionEdad")
public class RestriccionEdadModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_RestriccionEdad", nullable = false)
    private Integer idRestriccionEdad;
    @Column(name = "edadMinima")
    private Integer edad;

    public RestriccionEdadModel(Integer idRestriccionEdad, Integer edad) {
        this.idRestriccionEdad = idRestriccionEdad;
        this.edad = edad;
    }

    public Integer getIdRestriccionEdad() {
        return idRestriccionEdad;
    }

    public void setIdRestriccionEdad(Integer idRestriccionEdad) {
        this.idRestriccionEdad = idRestriccionEdad;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }
}
