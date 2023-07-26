package libreriadelibros.models;

public class UbicacionGeografica {

    private int id_ubicacion;
    private text paisOrigen;
    private text ciudad;
    private text codigoPostal;

    //Constructor
    public UbicacionGeografica(int id_ubicacion, text paisOrigen, text ciudad, text codigoPostal) {
        this.id_ubicacion = id_ubicacion;
        this.paisOrigen = paisOrigen;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    //Getters
    public int getId_ubicacion() {
        return id_ubicacion;
    }

    public text getPaisOrigen() {
        return paisOrigen;
    }

    public text getCiudad() {
        return ciudad;
    }

    public text getCodigoPostal() {
        return codigoPostal;
    }
    //Setters
    public void setId_ubicacion(int id_ubicacion) {
        this.id_ubicacion = id_ubicacion;
    }

    public void setPaisOrigen(text paisOrigen) {
        this.paisOrigen = paisOrigen;
    }

    public void setCiudad(text ciudad) {
        this.ciudad = ciudad;
    }

    public void setCodigoPostal(text codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
}