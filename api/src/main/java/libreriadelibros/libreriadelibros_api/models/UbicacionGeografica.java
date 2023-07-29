package libreriadelibros.libreriadelibros_api.models;

import org.w3c.dom.Text;

public class UbicacionGeografica {

    private int id_ubicacion;
    private Text paisOrigen;
    private Text ciudad;
    private Text codigoPostal;

    //Constructor
    public UbicacionGeografica(int id_ubicacion, Text paisOrigen, Text ciudad, Text codigoPostal) {
        this.id_ubicacion = id_ubicacion;
        this.paisOrigen = paisOrigen;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    //Getters
    public int getId_ubicacion() {
        return id_ubicacion;
    }

    public Text getPaisOrigen() {
        return paisOrigen;
    }

    public Text getCiudad() {
        return ciudad;
    }

    public Text getCodigoPostal() {
        return codigoPostal;
    }
    //Setters
    public void setId_ubicacion(int id_ubicacion) {
        this.id_ubicacion = id_ubicacion;
    }

    public void setPaisOrigen(Text paisOrigen) {
        this.paisOrigen = paisOrigen;
    }

    public void setCiudad(Text ciudad) {
        this.ciudad = ciudad;
    }

    public void setCodigoPostal(Text codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
}