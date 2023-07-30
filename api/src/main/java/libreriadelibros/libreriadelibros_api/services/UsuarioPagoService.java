package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.UsuarioPago;
import libreriadelibros.libreriadelibros_api.repositories.UsuarioPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class UsuarioPagoService implements UsuarioPagoRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public UsuarioPago create(UsuarioPago usuarioPago) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO UsuarioPago (id_usuario, nroTarjeta)" + "VALUES (id_usuario, nroTarjeta)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_usuario", usuarioPago.getId_usuario())
                    .addParameter("nroTarjeta", usuarioPago.getNroTarjeta())
                    .executeUpdate();
            return usuarioPago;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UsuarioPago> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from UsuarioPago order by id_usuario asc")
                    .executeAndFetch(UsuarioPago.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UsuarioPago> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from UsuarioPago where id_usuario=:id ")
                    .addParameter("id_usuario",id)
                    .executeAndFetch(UsuarioPago.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(UsuarioPago usuarioPago, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update UsuarioPago set nroTarjeta=:nroTarjeta where id_usuario=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_usuario", id)
                    .addParameter("nroTarjeta", usuarioPago.getNroTarjeta())
                    .executeUpdate();
            return "UsuarioPago actualizado";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar usuarioPago";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from UsuarioPago where id_usuario=:id")
                    .addParameter("id_usuario", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
