package libreriadelibros.libreriadelibros_api.models;


import java.util.Date;

public class Usuario {
    private int id_usuario;
    private String nombre;
    private String correoElectronico;
    private Date fechaNacimiento;
    private String alias;
    private String contraseña;
    private int id_favoritos;
    private int id_carrito;
    private int id_boleta;

    //Constructor
    public Usuario(int id_usuario, String nombre, String correoElectronico, Date fechaNacimiento, String alias, String contraseña, int id_favoritos, int id_carrito, int id_boleta) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.fechaNacimiento = fechaNacimiento;
        this.alias = alias;
        this.contraseña = contraseña;
        this.id_favoritos = id_favoritos;
        this.id_carrito = id_carrito;
        this.id_boleta = id_boleta;
    }

    // Getters
    public int getId_usuario() {
        return id_usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public String getAlias() {
        return alias;
    }

    public String getContraseña() {
        return contraseña;
    }

    public int getId_favoritos() {
        return id_favoritos;
    }

    public int getId_carrito() {
        return id_carrito;
    }

    public int getId_boleta() {
        return id_boleta;
    }

    // Setters

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public void setId_favoritos(int id_favoritos) {
        this.id_favoritos = id_favoritos;
    }

    public void setId_carrito(int id_carrito) {
        this.id_carrito = id_carrito;
    }

    public void setId_boleta(int id_boleta) {
        this.id_boleta = id_boleta;
    }
}