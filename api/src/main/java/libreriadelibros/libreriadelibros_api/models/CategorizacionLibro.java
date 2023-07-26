package libreriadelibros.models;

public class CategorizacionLibro {
    private int id_libro;
    private int id_categorizacion;

    //Constructor
    public CategorizacionLibro(int id_libro, int id_categorizacion) {
        this.id_libro = id_libro;
        this.id_categorizacion = id_categorizacion;
    }

    //Getters
    public int getId_libro() {
        return id_libro;
    }

    public int getId_categorizacion() {
        return id_categorizacion;
    }

    //Setters
    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }

    public void setId_categorizacion(int id_categorizacion) {
        this.id_categorizacion = id_categorizacion;
    }
}