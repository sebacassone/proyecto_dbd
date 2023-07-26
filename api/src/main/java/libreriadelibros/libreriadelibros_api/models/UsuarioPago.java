package libreriadelibros.models;

public class UsuarioPago {

    private int id_usuario;
    private bigint nroTarjeta;

    //Constructor
    public UsuarioPago(int id_usuario, bigint nroTarjeta) {
        this.id_usuario = id_usuario;
        this.nroTarjeta = nroTarjeta;
    }

    //Getters

    public int getId_usuario() {
        return id_usuario;
    }

    public bigint getNroTarjeta() {
        return nroTarjeta;
    }

    //Setters

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public void setNroTarjeta(bigint nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }
}