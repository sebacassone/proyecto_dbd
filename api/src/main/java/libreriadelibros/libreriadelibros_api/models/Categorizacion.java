package libreriadelibros.libreriadelibros_api.models;

import org.w3c.dom.Text;

public class Categorizacion {
    private String id_categorizacion;
    private Text genero;

    //Constructor
    public Categorizacion(String id_categorizacion, Text genero) {
        this.id_categorizacion = id_categorizacion;
        this.genero = genero;
    }

    //Getters
    public String getId_categorizacion() {
        return id_categorizacion;
    }

    public Text getGenero() {
        return genero;
    }

    //Setters
    public void setId_categorizacion(String id_categorizacion) {
        this.id_categorizacion = id_categorizacion;
    }

    public void setGenero(Text genero) {
        this.genero = genero;
    }
}
