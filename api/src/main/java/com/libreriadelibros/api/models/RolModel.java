package com.libreriadelibros.api.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Rol")
public class RolModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Rol", nullable = false)
    private Integer idRol;
    private String nombreRol;
    // Relación de uno es a muchos
    @OneToMany(mappedBy = "rolUsuario")
    private List<UsuarioModel> usuariosRol;

}
