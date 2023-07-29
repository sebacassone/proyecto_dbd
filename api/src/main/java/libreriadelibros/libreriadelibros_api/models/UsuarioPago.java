package libreriadelibros.libreriadelibros_api.models;

import java.math.BigInteger;

public class UsuarioPago {

    private int id_usuario;
    private BigInteger nroTarjeta;

    //Constructor
    public UsuarioPago(int id_usuario, BigInteger nroTarjeta) {
        this.id_usuario = id_usuario;
        this.nroTarjeta = nroTarjeta;
    }

    //Getters

    public int getId_usuario() {
        return id_usuario;
    }

    public BigInteger getNroTarjeta() {
        return nroTarjeta;
    }

    //Setters

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setNroTarjeta(BigInteger nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }
}