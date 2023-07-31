package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    // Relación uno a uno
    // Esta no tiene la llave foranea
    @JsonIgnore
    @OneToOne(mappedBy = "idRestriccionEdad")
    private LibroModel libroRestriccion;

    public RestriccionEdadModel(Integer idRestriccionEdad, Integer edad) {
        this.idRestriccionEdad = idRestriccionEdad;
        this.edad = edad;
    }

    public RestriccionEdadModel() {
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
