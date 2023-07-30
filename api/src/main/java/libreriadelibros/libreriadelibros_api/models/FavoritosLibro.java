package libreriadelibros.libreriadelibros_api.models;

public class FavoritosLibro {
    private String id_libro;
    private String id_favoritos;

    //Constructor
    public FavoritosLibro(String id_libro, String id_favoritos) {
        this.id_libro = id_libro;
        this.id_favoritos = id_favoritos;
    }

    //Getters
    public String getId_libro() {
        return id_libro;
    }

    public String getId_favoritos() {
        return id_favoritos;
    }
    //Setters

    public void setId_libro(String id_libro) {
        this.id_libro = id_libro;
    }

    public void setId_favoritos(String id_favoritos) {
        this.id_favoritos = id_favoritos;
    }
}