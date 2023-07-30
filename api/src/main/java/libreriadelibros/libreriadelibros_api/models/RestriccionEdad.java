package libreriadelibros.libreriadelibros_api.models;

public class RestriccionEdad {
    private String id_restriccion;
    private int edadMinima;

    //Constructor
    public RestriccionEdad(String id_restriccion, int edadMinima) {
        this.id_restriccion = id_restriccion;
        this.edadMinima = edadMinima;
    }

    //Getters
    public String getId_restriccion() {
        return id_restriccion;
    }

    public int getEdadMinima() {
        return edadMinima;
    }

    // Setters
    public void setId_restriccion(String id_restriccion) {
        this.id_restriccion = id_restriccion;
    }

    public void setEdadMinima(int edadMinima) {
        this.edadMinima = edadMinima;
    }
}