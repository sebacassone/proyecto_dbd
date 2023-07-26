package libreriadelibros.models;

public class Libro {
    // Atributos
    private int id_libro;
    private String titulo;
    private int stock;
    private int precio;
    private int vistas;
    private String link;
    private String idioma;
    private int id_restriccion;
    private int id_ubicacion;

    //Constructor
    public Libro(int id_libro, String titulo, int stock, int precio, int vistas, String link, String idioma, int id_restriccion, int id_ubicacion) {
        this.id_libro = id_libro;
        this.titulo = titulo;
        this.stock = stock;
        this.precio = precio;
        this.vistas = vistas;
        this.link = link;
        this.idioma = idioma;
        this.id_restriccion = id_restriccion;
        this.id_ubicacion = id_ubicacion;
    }

    // Getters
    public int getId_libro() {
        return id_libro;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getStock() {
        return stock;
    }

    public int getPrecio() {
        return precio;
    }

    public int getVistas() {
        return vistas;
    }

    public String getLink() {
        return link;
    }

    public String getIdioma() {
        return idioma;
    }

    public int getId_restriccion() {
        return id_restriccion;
    }

    public int getId_ubicacion() {
        return id_ubicacion;
    }

    // Setters
    public void setId_libro(int id_libro) {
        this.id_libro = id_libro;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public void setVistas(int vistas) {
        this.vistas = vistas;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }

    public void setId_restriccion(int id_restriccion) {
        this.id_restriccion = id_restriccion;
    }

    public void setId_ubicacion(int id_ubicacion) {
        this.id_ubicacion = id_ubicacion;
    }
}