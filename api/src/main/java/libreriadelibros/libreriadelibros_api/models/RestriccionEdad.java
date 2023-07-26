package libreriadelibros.models;

public class RestriccionEdad {
    private int id_restriccion;
    private int edadMinima;

    //Constructor
    public RestriccionEdad(int id_restriccion, int edadMinima) {
        this.id_restriccion = id_restriccion;
        this.edadMinima = edadMinima;
    }

    //Getters
    public int getId_restriccion() {
        return id_restriccion;
    }

    public int getEdadMinima() {
        return edadMinima;
    }

    // Setters
    public void setId_restriccion(int id_restriccion) {
        this.id_restriccion = id_restriccion;
    }

    public void setEdadMinima(int edadMinima) {
        this.edadMinima = edadMinima;
    }
}