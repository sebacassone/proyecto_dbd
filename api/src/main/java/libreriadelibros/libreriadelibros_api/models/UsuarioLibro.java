package libreriadelibros.libreriadelibros_api.models;

public class UsuarioLibro {
    private int id_usuario;
    private int id_libro;
    private boolean escrito;

    //Constructor
    public UsuarioLibro(int id_usuario, int id_libro, boolean escrito) {
        this.id_usuario = id_usuario;
        this.id_libro = id_libro;
        this.escrito = escrito;
    }

    // Getters
    public int getId_usuario() {
        return id_usuario;
    }

    public int getId_libro() {
        return id_libro;
    }

    public boolean isEscrito() {
        return escrito;
    }

    // Setters

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }

    public void setEscrito(boolean escrito) {
        this.escrito = escrito;
    }
}