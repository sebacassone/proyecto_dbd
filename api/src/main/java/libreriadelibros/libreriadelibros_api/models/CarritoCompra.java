package libreriadelibros.libreriadelibros_api.models;

import java.math.BigInteger;

public class CarritoCompra {

    private String id_carrito;
    private boolean estado;
    private BigInteger nroTarjeta;

    //Constructor
    public CarritoCompra(String id_carrito, boolean estado, BigInteger nroTarjeta) {
        this.id_carrito = id_carrito;
        this.estado = estado;
        this.nroTarjeta = nroTarjeta;
    }

    //Getters
    public String getId_carrito() {
        return id_carrito;
    }

    public boolean getEstado() {
        return estado;
    }

    public BigInteger getNroTarjeta() {
        return nroTarjeta;
    }

    //Setters
    public void setId_carrito(String id_carrito) {
        this.id_carrito = id_carrito;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public void setNroTarjeta(BigInteger nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }
}