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
    private Long idUsuario;
    private String nombre;
    @Column(name = "CorreoElectronico")
    private String correoElectronico;
    @Column(name = "FechaNacimiento")
    private Date fechaNacimiento;
    @Column(name = "Contraseña")
    private String contraseña;
    private String alias;
    // Relación uno a muchos
    @JsonIgnore
    @OneToMany(mappedBy = "usuarioFavorito")
    private List<FavoritosModel> favoritos;
    @JsonIgnore
    @OneToMany(mappedBy = "usuarioCarrito")
    private List<CarritoModel> carritos;
    @JsonIgnore
    @OneToMany(mappedBy = "usuarioBoleta")
    private List<BoletaModel> boletas;

    // Mapeo de las llaves foraneas
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "ID_Rol", unique = false)
    private RolModel rolUsuario;

    // Relación de muchos a muchos
    // Tabla UserLibro donde se tiene un atributo perteneciente a la tabla intermedia (un boooleano)
    @JsonIgnore
    @OneToMany(mappedBy = "usuarioLib")
    private List<UsuarioLibroModel> libros;

    // Mucho a muchos con metodo de pago
    @JsonIgnore
    @ManyToMany(mappedBy = "usuariosMetodoPago")
    private List<MetodoDePagoModel> metodosDePago;

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getContrasena() {
        return contraseña;
    }

    public void setContrasena(String contrasena) {
        this.contraseña = contrasena;
    }

    public List<FavoritosModel> getFavoritos() {
        return favoritos;
    }

    public void setFavoritos(List<FavoritosModel> favoritos) {
        this.favoritos = favoritos;
    }

    public List<CarritoModel> getCarritos() {
        return carritos;
    }

    public void setCarritos(List<CarritoModel> carritos) {
        this.carritos = carritos;
    }

    public List<BoletaModel> getBoletas() {
        return boletas;
    }

    public void setBoletas(List<BoletaModel> boletas) {
        this.boletas = boletas;
    }

    public List<UsuarioLibroModel> getLibros() {
        return libros;
    }

    public void setLibros(List<UsuarioLibroModel> libros) {
        this.libros = libros;
    }

    public List<MetodoDePagoModel> getMetodosDePago() {
        return metodosDePago;
    }

    public void setMetodosDePago(List<MetodoDePagoModel> metodosDePago) {
        this.metodosDePago = metodosDePago;
    }
}
