package libreriadelibros.libreriadelibros_api.models;

import org.w3c.dom.Text;

public class Rol {
    private String id_rol;
    private Text nombreRol;
    private String id_usuario;

    //Constructor
    public Rol(String id_rol, Text nombreRol, String id_usuario) {
        this.id_rol = id_rol;
        this.nombreRol = nombreRol;
        this.id_usuario = id_usuario;
    }


    // Getters

    public String getId_rol() {
        return id_rol;
    }

    public Text getNombreRol() {
        return nombreRol;
    }

    public String getId_usuario() {
        return id_usuario;
    }
    // Setters

    public void setId_rol(String id_rol) {
        this.id_rol = id_rol;
    }

    public void setNombreRol(Text nombreRol) {
        this.nombreRol = nombreRol;
    }

    public void setId_usuario(String id_usuario) {
        this.id_usuario = id_usuario;
    }
}