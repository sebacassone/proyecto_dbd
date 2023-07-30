package com.libreriadelibros.api.models;

import jakarta.persistence.*;

@Entity
@Table(name="Categorizacion")
public class CategorizacionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long idCategorizacion;
    private String genero;

    public CategorizacionModel(Long idCategorizacion, String genero) {
        this.idCategorizacion = idCategorizacion;
        this.genero = genero;
    }

    public Long getIdCategorizacion() {
        return idCategorizacion;
    }

    public void setIdCategorizacion(Long idCategorizacion) {
        this.idCategorizacion = idCategorizacion;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
}
