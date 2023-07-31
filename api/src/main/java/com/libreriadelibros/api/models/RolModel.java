package com.libreriadelibros.api.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Rol")
public class RolModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Rol", nullable = false)
    private Long idRol;
    private String nombreRol;
    // Relación de uno es a muchos
    @OneToMany(mappedBy = "rolUsuario")
    private List<UsuarioModel> usuariosRol;

    public Long getIdRol() {
        return idRol;
    }

    public void setIdRol(Long idRol) {
        this.idRol = idRol;
    }

    public String getNombreRol() {
        return nombreRol;
    }

    public void setNombreRol(String nombreRol) {
        this.nombreRol = nombreRol;
    }

    public List<UsuarioModel> getUsuariosRol() {
        return usuariosRol;
    }

    public void setUsuariosRol(List<UsuarioModel> usuariosRol) {
        this.usuariosRol = usuariosRol;
    }
}
