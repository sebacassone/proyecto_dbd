package libreriadelibros.libreriadelibros_api.models;

public class UsuarioLibro {
    private String id_usuario;
    private String id_libro;
    private boolean escrito;

    //Constructor
    public UsuarioLibro(String id_usuario, String id_libro, boolean escrito) {
        this.id_usuario = id_usuario;
        this.id_libro = id_libro;
        this.escrito = escrito;
    }

    // Getters
    public String getId_usuario() {
        return id_usuario;
    }

    public String getId_libro() {
        return id_libro;
    }

    public boolean getEscrito() {
        return escrito;
    }

    // Setters

    public void setId_usuario(String id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setId_libro(String id_libro) {
        this.id_libro = id_libro;
    }

    public void setEscrito(boolean escrito) {
        this.escrito = escrito;
    }
}