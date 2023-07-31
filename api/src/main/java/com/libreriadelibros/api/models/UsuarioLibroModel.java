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

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Boolean getEscrito() {
        return escrito;
    }

    public void setEscrito(Boolean escrito) {
        this.escrito = escrito;
    }

    public UsuarioModel getUsuarioLib() {
        return usuarioLib;
    }

    public void setUsuarioLib(UsuarioModel usuarioLib) {
        this.usuarioLib = usuarioLib;
    }

    public LibroModel getLibroUser() {
        return libroUser;
    }

    public void setLibroUser(LibroModel libroUser) {
        this.libroUser = libroUser;
    }
}
