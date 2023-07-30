package libreriadelibros.libreriadelibros_api.models;

public class Boleta {
    private String id_boleta;
    private int monto;
    private int id_carrito;

    //Getters
    public String getId_boleta() {
        return id_boleta;
    }

    public int getMonto() {
        return monto;
    }

    public int getId_carrito() {
        return id_carrito;
    }

    //Setters
    public void setId_boleta(String id_boleta) {
        this.id_boleta = id_boleta;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }

    public void setId_carrito(int id_carrito) {
        this.id_carrito = id_carrito;
    }
}