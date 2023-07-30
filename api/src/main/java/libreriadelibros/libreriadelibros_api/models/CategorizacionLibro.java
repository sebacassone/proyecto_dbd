package libreriadelibros.libreriadelibros_api.models;

public class CategorizacionLibro {
    private String id_libro;
    private String id_categorizacion;

    //Constructor
    public CategorizacionLibro(String id_libro, String id_categorizacion) {
        this.id_libro = id_libro;
        this.id_categorizacion = id_categorizacion;
    }

    //Getters
    public String getId_libro() {
        return id_libro;
    }

    public String getId_categorizacion() {
        return id_categorizacion;
    }

    //Setters
    public void setId_libro(String id_libro) {
        this.id_libro = id_libro;
    }

    public void setId_categorizacion(String id_categorizacion) {
        this.id_categorizacion = id_categorizacion;
    }
}