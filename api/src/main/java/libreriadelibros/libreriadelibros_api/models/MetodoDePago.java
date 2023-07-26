package libreriadelibros.models;

public class MetodoDePago {
    private bigint nroTarjeta;
    private text nombre;
    private text titular;
    private text cvv;
    private char fechaExpiracion;

    //Constructor
    public MetodoDePago(bigint nroTarjeta, text nombre, text titular, text cvv, char fechaExpiracion) {
        this.nroTarjeta = nroTarjeta;
        this.nombre = nombre;
        this.titular = titular;
        this.cvv = cvv;
        this.fechaExpiracion = fechaExpiracion;
    }

    //Getters
    public bigint getNroTarjeta() {
        return nroTarjeta;
    }

    public text getNombre() {
        return nombre;
    }

    public text getTitular() {
        return titular;
    }

    public text getCvv() {
        return cvv;
    }

    public char getFechaExpiracion() {
        return fechaExpiracion;
    }

    //Setters

    public void setNroTarjeta(bigint nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }

    public void setNombre(text nombre) {
        this.nombre = nombre;
    }

    public void setTitular(text titular) {
        this.titular = titular;
    }

    public void setCvv(text cvv) {
        this.cvv = cvv;
    }

    public void setFechaExpiracion(char fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }
}