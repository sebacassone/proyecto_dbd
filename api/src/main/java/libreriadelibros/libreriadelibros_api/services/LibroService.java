package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.Libro;
import libreriadelibros.libreriadelibros_api.repositories.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Repository
public class LibroService implements LibroRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public Libro create(Libro libro) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO Boleta (id_libro, titulo, stock, precio, vistas, link, idioma, id_retriccion, id_ubicacion)"
                     + "VALUES (id_libro, titulo, stock, precio, vistas, link, idioma, id_retriccion, id_ubicacion)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_libro", libro.getId_libro())
                    .addParameter("titulo", libro.getTitulo())
                    .addParameter("stock", libro.getStock())
                    .addParameter("precio", libro.getPrecio())
                    .addParameter("vistas", libro.getVistas())
                    .addParameter("link", libro.getLink())
                    .addParameter("idioma", libro.getIdioma())
                    .addParameter("id_restriccion", libro.getId_restriccion())
                    .addParameter("id_ubicacion", libro.getId_ubicacion())
                    .executeUpdate();
            return libro;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Libro> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Libro order by id_libro asc")
                    .executeAndFetch(Libro.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Libro> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Libro where id_libro=:id ")
                    .addParameter("id_libro",id)
                    .executeAndFetch(Libro.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Libro libro, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update libro set titulo=:titulo, stock=:stock, precio=:precio, vistas=:vistas, link=:link, idioma=:idiomam, id_restriccion=:id_restriccion, id_ubicacion=:id_ubicacion where id_libro=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_libro", id)
                    .addParameter("titulo", libro.getTitulo())
                    .addParameter("stock", libro.getStock())
                    .addParameter("precio", libro.getPrecio())
                    .addParameter("stock", libro.getStock())
                    .addParameter("vistas", libro.getVistas())
                    .addParameter("link", libro.getLink())
                    .addParameter("idioma", libro.getIdioma())
                    .addParameter("id_restriccion", libro.getId_restriccion())
                    .addParameter("id_ubicacion", libro.getId_ubicacion())
                    .executeUpdate();
            return "Libro actualizado";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar boleta";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from libro where id_libro=:id")
                    .addParameter("id_libro", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
