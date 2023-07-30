package libreriadelibros.libreriadelibros_api.models;

import org.w3c.dom.Text;

public class Valoracion {
    private String id_valoracion;
    private Text comentarios;
    private int puntuacion;
    private String id_usurio;
    private String id_libro;

    //Constructor
    public Valoracion(String id_valoracion, Text comentarios, int puntuacion, String id_usurio, String id_libro) {
        this.id_valoracion = id_valoracion;
        this.comentarios = comentarios;
        this.puntuacion = puntuacion;
        this.id_usurio = id_usurio;
        this.id_libro = id_libro;
    }


    //Getters

    public String getId_valoracion() {
        return id_valoracion;
    }

    public Text getComentarios() {
        return comentarios;
    }

    public int getPuntuacion() {
        return puntuacion;
    }

    public String getId_usurio() {
        return id_usurio;
    }

    public String getId_libro() {
        return id_libro;
    }

    //Setters

    public void setId_valoracion(String id_valoracion) {
        this.id_valoracion = id_valoracion;
    }

    public void setComentarios(Text comentarios) {
        this.comentarios = comentarios;
    }

    public void setPuntuacion(int puntuacion) {
        this.puntuacion = puntuacion;
    }

    public void setId_usurio(String id_usurio) {
        this.id_usurio = id_usurio;
    }

    public void setId_libro(String id_libro) {
        this.id_libro = id_libro;
    }
}