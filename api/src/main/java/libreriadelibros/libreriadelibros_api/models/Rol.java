package libreriadelibros.models;

public class Rol {
    private int id_rol;
    private text nombreRol;
    private int id_usuario;

    //Constructor
    public Rol(int id_rol, text nombreRol, int id_usuario) {
        this.id_rol = id_rol;
        this.nombreRol = nombreRol;
        this.id_usuario = id_usuario;
    }


    // Getters

    public int getId_rol() {
        return id_rol;
    }

    public text getNombreRol() {
        return nombreRol;
    }

    public int getId_usuario() {
        return id_usuario;
    }
    // Setters

    public void setId_rol(int id_rol) {
        this.id_rol = id_rol;
    }

    public void setNombreRol(text nombreRol) {
        this.nombreRol = nombreRol;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }
}