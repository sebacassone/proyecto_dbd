package libreriadelibros.models;

public class Valoracion {
    private int id_valoracion;
    private text comentarios;
    private int puntuacion;
    private int id_usurio;
    private int id_libro;

    //Constructor
    public Valoracion(int id_valoracion, text comentarios, int puntuacion, int id_usurio, int id_libro) {
        this.id_valoracion = id_valoracion;
        this.comentarios = comentarios;
        this.puntuacion = puntuacion;
        this.id_usurio = id_usurio;
        this.id_libro = id_libro;
    }


    //Getters

    public int getId_valoracion() {
        return id_valoracion;
    }

    public text getComentarios() {
        return comentarios;
    }

    public int getPuntuacion() {
        return puntuacion;
    }

    public int getId_usurio() {
        return id_usurio;
    }

    public int getId_libro() {
        return id_libro;
    }

    //Setters

    public void setId_valoracion(int id_valoracion) {
        this.id_valoracion = id_valoracion;
    }

    public void setComentarios(text comentarios) {
        this.comentarios = comentarios;
    }

    public void setPuntuacion(int puntuacion) {
        this.puntuacion = puntuacion;
    }

    public void setId_usurio(int id_usurio) {
        this.id_usurio = id_usurio;
    }

    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }
}