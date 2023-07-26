package libreriadelibros.models;

public class Categorizacion {
    private int id_categorizacion;
    private text genero;

    //Constructor
    public Categorizacion(int id_categorizacion, text genero) {
        this.id_categorizacion = id_categorizacion;
        this.genero = genero;
    }

    //Getters
    public int getId_categorizacion() {
        return id_categorizacion;
    }

    public text getGenero() {
        return genero;
    }

    //Setters
    public void setId_categorizacion(int id_categorizacion) {
        this.id_categorizacion = id_categorizacion;
    }

    public void setGenero(text genero) {
        this.genero = genero;
    }
}
