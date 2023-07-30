package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.CarritoCompra;
import libreriadelibros.libreriadelibros_api.repositories.CarritoCompraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class CarritoCompraService implements CarritoCompraRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public CarritoCompra create(CarritoCompra Carrito) {
        try(Connection conn = sql2o.open()){
            String sql = "insert into CarritoCompra (idCarrito, estado, nroTarjeta)" + "values (id_carrito, estado, nroTarjeta)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_carrito", Carrito.getId_carrito())
                    .addParameter("estado", Carrito.getEstado())
                    .addParameter("nroTarjeta", Carrito.getNroTarjeta())
                    .executeUpdate();
            return Carrito;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<CarritoCompra> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from CarritoCompra order BY id_carrito ASC")
                    .executeAndFetch(CarritoCompra.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<CarritoCompra> getBy(CarritoCompra Carrito, String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from CarritoCompra where id_carrito=:id")
                    .addParameter("id_carrito", id)
                    .executeAndFetch(CarritoCompra.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(CarritoCompra Carrito, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update CarritoCompra set estado=:estado, nroTarjeta=:nroTarjeta where id_carrito=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_carrito",id)
                    .addParameter("estado",Carrito.getEstado())
                    .addParameter("nroTarjeta", Carrito.getNroTarjeta())
                    .executeUpdate();
            return "Carrito actualizado";
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return "Fallo al actualizar carrito";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from CarritoCompra where id_carrito=:id")
                    .addParameter("id_carrito",id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
