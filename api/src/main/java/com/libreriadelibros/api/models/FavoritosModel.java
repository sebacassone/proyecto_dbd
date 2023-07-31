package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Favoritos")
public class FavoritosModel {
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_Favoritos", nullable = false)
    private Long idFavoritos;
    @Column(name="Cantidad")
    private Integer cantidad;

    // Relación de muchos a uno
    @JsonIgnore
    @ManyToOne
    private UsuarioModel usuarioFavorito;

    // Relación muchos a muchos
    @JsonIgnore
    @ManyToMany(cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    @JoinTable(
            name = "FavoritosLibros",
            joinColumns = {@JoinColumn(name = "ID_Favoritos")},
            inverseJoinColumns = {@JoinColumn(name = "ID_Libro")}
    )
    private List<LibroModel> librosFav;

}
