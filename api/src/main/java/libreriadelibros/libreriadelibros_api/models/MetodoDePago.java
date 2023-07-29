package libreriadelibros.libreriadelibros_api.models;


import org.w3c.dom.Text;

import java.math.BigInteger;

public class MetodoDePago {
    private BigInteger nroTarjeta;
    private Text nombre;
    private Text titular;
    private int cvv;
    private char fechaExpiracion;

    //Constructor
    public MetodoDePago(BigInteger nroTarjeta, Text nombre, Text titular, int cvv, char fechaExpiracion) {
        this.nroTarjeta = nroTarjeta;
        this.nombre = nombre;
        this.titular = titular;
        this.cvv = cvv;
        this.fechaExpiracion = fechaExpiracion;
    }

    //Getters
    public BigInteger getNroTarjeta() {
        return nroTarjeta;
    }

    public Text getNombre() {
        return nombre;
    }

    public Text getTitular() {
        return titular;
    }

    public int getCvv() {
        return cvv;
    }

    public char getFechaExpiracion() {
        return fechaExpiracion;
    }

    //Setters

    public void setNroTarjeta(BigInteger nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }

    public void setNombre(Text nombre) {
        this.nombre = nombre;
    }

    public void setTitular(Text titular) {
        this.titular = titular;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public void setFechaExpiracion(char fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }
}