package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Categorizacion")
public class CategorizacionModel {
    // Atributos de la tabla
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_Categorizacion", nullable = false)
    private Long idCategorizacion;
    @Column(name="Genero")
    private String genero;

    // Relación muchos a muchos
    @JsonIgnore
    @ManyToMany(cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    @JoinTable(
            name = "CategorizacionLibro",
            joinColumns = {@JoinColumn(name="ID_Categorizacion")},
            inverseJoinColumns = {@JoinColumn(name="ID_Libro")}
    )
    private List<LibroModel> librosCat;

    public CategorizacionModel(Long idCategorizacion, String genero, List<LibroModel> libros) {
        this.idCategorizacion = idCategorizacion;
        this.genero = genero;
        this.librosCat = libros;
    }

    public CategorizacionModel() {
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

    public List<LibroModel> getLibros() {
        return librosCat;
    }

    public void setLibros(List<LibroModel> libros) {
        this.librosCat = libros;
    }
}
