package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="Usuario")
public class UsuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Usuario", nullable = false)
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
    @OneToMany
    @JoinColumn(name = "ID_Boleta")
    private List<BoletaModel> boletas;

    // Relación de muchos a muchos
    // Tabla UserLibro donde se tiene un atributo perteneciente a la tabla intermedia (un boooleano)
    @JsonIgnore
    @OneToMany(mappedBy = "usuarioLib")
    private List<UsuarioLibroModel> libros;

    // Mucho a muchos con metodo de pago
    @JsonIgnore
    @ManyToMany(mappedBy = "usuariosMetodoPago")
    private List<MetodoDePagoModel> metodosDePago;
}
