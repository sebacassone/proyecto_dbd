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

    public Integer getIdRol() {
        return idRol;
    }

    public void setIdRol(Integer idRol) {
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
