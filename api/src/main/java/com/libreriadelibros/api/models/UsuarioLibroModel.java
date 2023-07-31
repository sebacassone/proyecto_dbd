package com.libreriadelibros.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "UsuarioLibro")
public class UsuarioLibroModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    // Atributo adicional
    private Boolean escrito;

    // Relaciones
    @ManyToOne
    @JoinColumn(name = "ID_Usuario")
    private UsuarioModel usuarioLib;
    @ManyToOne
    @JoinColumn(name = "ID_Libro")
    private LibroModel libroUser;
}
