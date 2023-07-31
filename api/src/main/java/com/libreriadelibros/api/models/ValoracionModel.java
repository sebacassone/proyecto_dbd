package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Valoracion")
public class ValoracionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Valoracion", nullable = false)
    private Integer idValoracion;
    private String comentarios;
    private Integer puntuacion;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ID_Usuario")
    private UsuarioModel usuario;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ID_Libro")
    private LibroModel libro;
}
