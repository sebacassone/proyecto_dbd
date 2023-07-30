package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.Valoracion;
import libreriadelibros.libreriadelibros_api.repositories.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class ValoracionService implements ValoracionRepository {

    @Autowired
    private Sql2o sql2o;


    @Override
    public Valoracion create(Valoracion valoracion) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO Valoracion (id_valoracion, comentarios, puntuacion, id_usuario, id_libro)" + "VALUES (id_valoracion, comentarios, puntuacion, id_usuario, id_libro)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_valoracion", valoracion.getId_valoracion())
                    .addParameter("comentarios", valoracion.getComentarios())
                    .addParameter("puntuacion", valoracion.getPuntuacion())
                    .addParameter("id_usuario", valoracion.getId_usurio())
                    .addParameter("id_libro", valoracion.getId_libro())
                    .executeUpdate();
            return valoracion;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Valoracion> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Valoracion order by id_valoracion asc")
                    .executeAndFetch(Valoracion.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Valoracion> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Valoracion where id_valoracion=:id ")
                    .addParameter("id_valoracion",id)
                    .executeAndFetch(Valoracion.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Valoracion valoracion, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update Valoracion set comentarios=:comentarios, puntuacion=:puntuacionm, id_usurio=:id_usurio, id_libro=:id_libro where id_valoracion=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_valoracion", id)
                    .addParameter("comentarios", valoracion.getId_valoracion())
                    .addParameter("puntuacion", valoracion.getPuntuacion())
                    .addParameter("id_usurio", valoracion.getId_usurio())
                    .addParameter("id_libro", valoracion.getId_libro())
                    .executeUpdate();
            return "Valoracion actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar valoracion";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from boleta where id_boleta=:id")
                    .addParameter("id_boleta", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
