package libreriadelibros.libreriadelibros_api.models;

public class Favoritos {
    private String id_favoritos;

    private int cantidadLibros;

    //Constructor
    public Favoritos(String id_favoritos, int cantidadLibros) {
        this.id_favoritos = id_favoritos;
        this.cantidadLibros = cantidadLibros;
    }

    //Getters
    public String getId_favoritos() {
        return id_favoritos;
    }

    public int getCantidadLibros() {
        return cantidadLibros;
    }
    //Setters
    public void setId_favoritos(String id_favoritos) {
        this.id_favoritos = id_favoritos;
    }

    public void setCantidadLibros(int cantidadLibros) {
        this.cantidadLibros = cantidadLibros;
    }
}