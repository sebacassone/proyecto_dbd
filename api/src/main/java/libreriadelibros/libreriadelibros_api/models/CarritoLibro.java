package libreriadelibros.libreriadelibros_api.models;

public class CarritoLibro {
    private int id_carrito;

    private int id_libro;

    //Constructor
    public CarritoLibro(int id_carrito, int id_libro) {
        this.id_carrito = id_carrito;
        this.id_libro = id_libro;
    }

    //Getters
    public int getId_carrito() {
        return id_carrito;
    }

    public int getId_libro() {
        return id_libro;
    }

    // Setters

    public void setId_carrito(int id_carrito) {
        this.id_carrito = id_carrito;
    }

    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }
}