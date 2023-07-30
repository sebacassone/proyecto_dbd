package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.Rol;
import libreriadelibros.libreriadelibros_api.repositories.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class RolService implements RolRepository {

    @Autowired
    private Sql2o sql2o;


    @Override
    public Rol create(Rol rol) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO Boleta (id_rol, nombreRol, id_usuario)" + "VALUES (id_rol, nombreRol, id_usuario)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_rol", rol.getId_rol())
                    .addParameter("nombreRol", rol.getNombreRol())
                    .addParameter("id_usuario", rol.getId_usuario())
                    .executeUpdate();
            return rol;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Rol> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Rol order by id_rol asc")
                    .executeAndFetch(Rol.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Rol> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Rol where id_rol=:id ")
                    .addParameter("id_rol",id)
                    .executeAndFetch(Rol.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Rol rol, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update rol set nombreRol=:nombreRol, id_usuario=:id_usuario where id_rol=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_rol", id)
                    .addParameter("nombreRol", rol.getNombreRol())
                    .addParameter("id_usuario", rol.getId_usuario())
                    .executeUpdate();
            return "Rol actualizado";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar rol";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from rol where id_rol=:id")
                    .addParameter("id_rol", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
