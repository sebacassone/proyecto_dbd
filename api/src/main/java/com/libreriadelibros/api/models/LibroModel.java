package com.libreriadelibros.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Libro")
public class LibroModel {
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_Libro", nullable = false)
    private Integer idLibro;
    @Column(name="Titulo")
    private String titulo;
    @Column(name="Stock")
    private Integer stock;
    @Column(name="Precio")
    private Integer precio;
    @Column(name="Vistas")
    private Integer vistas;
    @Column(name="Link")
    private String link;
    @Column(name="Idioma")
    private String idioma;

    // Relaciones uno a uno
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "ID_RestriccionEdad")
    private RestriccionEdadModel idRestriccionEdad;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "ID_UbicacionGeo")
    private UbicacionGeoModel idUbicacionGeo;

    // Relaciones muchos a muchos
    @JsonIgnore
    @ManyToMany(mappedBy = "librosCat")
    private List<CategorizacionModel> categorizaciones;
    @JsonIgnore
    @ManyToMany(mappedBy = "librosFav")
    private List<FavoritosModel> favoritos;

    @JsonIgnore
    @ManyToMany(mappedBy = "librosCarrito")
    private List<CarritoModel> carritos;
    // Esta es la relación de muchos es a muchos con user
    @JsonIgnore
    @OneToMany(mappedBy = "libroUser")
    private List<UsuarioLibroModel> usuarios;


    public LibroModel(Integer idLibro, String titulo, Integer stock, Integer precio, Integer vistas, String link, String idioma, RestriccionEdadModel idRestriccionEdad, UbicacionGeoModel idUbicacionGeo) {
        this.idLibro = idLibro;
        this.titulo = titulo;
        this.stock = stock;
        this.precio = precio;
        this.vistas = vistas;
        this.link = link;
        this.idioma = idioma;
        this.idRestriccionEdad = idRestriccionEdad;
        this.idUbicacionGeo = idUbicacionGeo;
    }

    public Integer getIdLibro() {
        return idLibro;
    }

    public void setIdLibro(Integer idLibro) {
        this.idLibro = idLibro;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Integer getVistas() {
        return vistas;
    }

    public void setVistas(Integer vistas) {
        this.vistas = vistas;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getIdioma() {
        return idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }

    public RestriccionEdadModel getIdRestriccionEdad() {
        return idRestriccionEdad;
    }

    public void setIdRestriccionEdad(RestriccionEdadModel idRestriccionEdad) {
        this.idRestriccionEdad = idRestriccionEdad;
    }

    public UbicacionGeoModel getIdUbicacionGeo() {
        return idUbicacionGeo;
    }

    public void setIdUbicacionGeo(UbicacionGeoModel idUbicacionGeo) {
        this.idUbicacionGeo = idUbicacionGeo;
    }
}
