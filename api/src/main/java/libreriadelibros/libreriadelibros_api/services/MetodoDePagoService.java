package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.MetodoDePago;
import libreriadelibros.libreriadelibros_api.repositories.MetodoDePagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class MetodoDePagoService implements MetodoDePagoRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public MetodoDePago create(MetodoDePago metodoDePago) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO MetodoDePago (nroTarjeta, nombre, titular, cvv, fechaExpiracion)" + "VALUES (nroTarjeta, nombre, titular, cvv, fechaExpiracion)";
            conn.createQuery(sql, true)
                    .addColumnMapping("nroTarjeta", metodoDePago.getNroTarjeta())
                    .addParameter("nombre", metodoDePago.getNombre())
                    .addParameter("titular", metodoDePago.getTitular())
                    .addParameter("cvv", metodoDePago.getCvv())
                    .addParameter("fechaExpiracion", metodoDePago.getFechaExpiracion())
                    .executeUpdate();
            return metodoDePago;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<MetodoDePago> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from MetodoDePago order by nroTarjeta asc")
                    .executeAndFetch(MetodoDePago.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<MetodoDePago> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from MetodoDePago where nroTarjeta=:id ")
                    .addParameter("nroTarjeta",id)
                    .executeAndFetch(MetodoDePago.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(MetodoDePago metodoDePago, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update metodoDePago set nombre=:nombre, titular=:titular, cvv=:cvv, fechaExpiracion=:fechaExpiracion where nroTarjeta=:id";
            conn.createQuery(updateSql)
                    .addParameter("nroTarjeta", id)
                    .addParameter("nombre", metodoDePago.getNombre())
                    .addParameter("titular", metodoDePago.getTitular())
                    .addParameter("cvv", metodoDePago.getCvv())
                    .addParameter("fechaExpiracion", metodoDePago.getFechaExpiracion())
                    .executeUpdate();
            return "Metodo de pago actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar metodo de pago";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from metodoDePago where nroTarjeta=:id")
                    .addParameter("nroTarjeta", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
