package libreriadelibros.models;

public class CarritoCompra {

    private int id_carrito;
    private boolean estado;
    private bigint nroTarjeta;

    //Constructor
    public CarritoCompra(int id_carrito, boolean estado, bigint nroTarjeta) {
        this.id_carrito = id_carrito;
        this.estado = estado;
        this.nroTarjeta = nroTarjeta;
    }

    //Getters
    public int getId_carrito() {
        return id_carrito;
    }

    public boolean isEstado() {
        return estado;
    }

    public bigint getNroTarjeta() {
        return nroTarjeta;
    }

    //Setters
    public void setId_carrito(int id_carrito) {
        this.id_carrito = id_carrito;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public void setNroTarjeta(bigint nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }
}