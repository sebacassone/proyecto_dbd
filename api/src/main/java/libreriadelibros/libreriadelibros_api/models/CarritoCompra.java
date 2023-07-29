package libreriadelibros.libreriadelibros_api.models;

import java.math.BigInteger;

public class CarritoCompra {

    private int id_carrito;
    private boolean estado;
    private BigInteger nroTarjeta;

    //Constructor
    public CarritoCompra(int id_carrito, boolean estado, BigInteger nroTarjeta) {
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

    public BigInteger getNroTarjeta() {
        return nroTarjeta;
    }

    //Setters
    public void setId_carrito(int id_carrito) {
        this.id_carrito = id_carrito;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public void setNroTarjeta(BigInteger nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }
}