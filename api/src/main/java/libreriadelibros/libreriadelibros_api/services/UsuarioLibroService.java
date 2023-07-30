package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.UsuarioLibro;
import libreriadelibros.libreriadelibros_api.repositories.UsuarioLibrosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service

public class UsuarioLibroService implements UsuarioLibrosRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public UsuarioLibro create(UsuarioLibro usuarioLibro) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO UsuarioLibro (id_usuario, id_libro, escrito)" + "VALUES (id_usuario, id_libro, escrito)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_usuario", usuarioLibro.getId_usuario())
                    .addParameter("id_libro", usuarioLibro.getId_libro())
                    .addParameter("id_carrito", usuarioLibro.getEscrito())
                    .executeUpdate();
            return usuarioLibro;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UsuarioLibro> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from UsuarioLibro order by id_usuario asc")
                    .executeAndFetch(UsuarioLibro.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }
    }

    @Override
    public List<UsuarioLibro> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from UsuarioLibro where id_usuario=:id ")
                    .addParameter("id_usuario",id)
                    .executeAndFetch(UsuarioLibro.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(UsuarioLibro usuarioLibro, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update UsuarioLibro set id_libro=:id_libro, escrito=:escrito where id_usuario=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_usuario", id)
                    .addParameter("id_libro", usuarioLibro.getId_libro())
                    .addParameter("escrito", usuarioLibro.getEscrito())
                    .executeUpdate();
            return "UsuarioLibro actualizado";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar usuarioLibro";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from UsuarioLibro where id_usuario=:id")
                    .addParameter("id_usuario", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
