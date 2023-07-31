package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.Date;
import java.util.List;

public class UsuarioModel {
    private Integer idUsuario;
    private String nombre;
    private String correoElectronico;
    private Date fechaNacimiento;
    private String contrasena;
    // Relación uno a muchos
    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "ID_Favoritos")
    private List<FavoritosModel> favoritos;
    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "ID_Carrito")
    private List<CarritoModel> carritos;
    @JsonIgnore
}
