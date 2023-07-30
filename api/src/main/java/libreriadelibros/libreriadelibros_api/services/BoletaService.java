package libreriadelibros.libreriadelibros_api.services;


import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.repositories.BoletaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;
import java.util.List;

@Service
public class BoletaService implements BoletaRepository {

    @Autowired
    private Sql2o sql2o;

    public Boleta create(Boleta boleta){
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO Boleta (id_boleta, monto, id_carrito)" + "VALUES (id_boleta, monto, id_carrito)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_boleta", boleta.getId_boleta())
                    .addParameter("monto", boleta.getMonto())
                    .addParameter("id_carrito", boleta.getId_carrito())
                    .executeUpdate();
            return boleta;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Boleta> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Boleta order by id_boleta asc")
                    .executeAndFetch(Boleta.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Boleta> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Boleta where id_boleta=:id ")
                    .addParameter("id_boleta",id)
                    .executeAndFetch(Boleta.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Boleta boleta, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update boleta set monto=:monto, id_carrito=:idCarrito where id_boleta=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_boleta", id)
                    .addParameter("monto", boleta.getMonto())
                    .addParameter("id_carrito", boleta.getId_carrito())
                    .executeUpdate();
            return "Boleta actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar boleta";
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
