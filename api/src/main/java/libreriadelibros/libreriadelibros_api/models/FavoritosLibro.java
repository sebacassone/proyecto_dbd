package libreriadelibros.libreriadelibros_api.models;

public class FavoritosLibro {
    private int id_libro;
    private int id_favoritos;

    //Constructor
    public FavoritosLibro(int id_libro, int id_favoritos) {
        this.id_libro = id_libro;
        this.id_favoritos = id_favoritos;
    }

    //Getters
    public int getId_libro() {
        return id_libro;
    }

    public int getId_favoritos() {
        return id_favoritos;
    }
    //Setters

    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }

    public void setId_favoritos(int id_favoritos) {
        this.id_favoritos = id_favoritos;
    }
}