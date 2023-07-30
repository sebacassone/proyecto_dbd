package libreriadelibros.libreriadelibros_api.models;

public class CarritoLibro {
    private String id_carrito;

    private String id_libro;

    //Constructor
    public CarritoLibro(String id_carrito, String id_libro) {
        this.id_carrito = id_carrito;
        this.id_libro = id_libro;
    }

    //Getters
    public String getId_carrito() {
        return id_carrito;
    }

    public String getId_libro() {
        return id_libro;
    }

    // Setters

    public void setId_carrito(String id_carrito) {
        this.id_carrito = id_carrito;
    }

    public void setId_libro(String id_libro) {
        this.id_libro = id_libro;
    }
}