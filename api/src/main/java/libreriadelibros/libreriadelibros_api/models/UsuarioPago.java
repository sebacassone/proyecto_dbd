package libreriadelibros.libreriadelibros_api.models;

import java.math.BigInteger;

public class UsuarioPago {

    private String id_usuario;
    private String nroTarjeta;

    //Constructor
    public UsuarioPago(String id_usuario, String nroTarjeta) {
        this.id_usuario = id_usuario;
        this.nroTarjeta = nroTarjeta;
    }

    //Getters

    public String getId_usuario() {
        return id_usuario;
    }

    public String getNroTarjeta() {
        return nroTarjeta;
    }

    //Setters

    public void setId_usuario(String id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setNroTarjeta(String nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }
}