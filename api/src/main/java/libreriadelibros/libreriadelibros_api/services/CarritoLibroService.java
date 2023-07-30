package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.CarritoLibro;
import libreriadelibros.libreriadelibros_api.repositories.CarritoLibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class CarritoLibroService implements CarritoLibroRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public CarritoLibro create(CarritoLibro CarritoLibro) {
        try(Connection conn = sql2o.open()){
            String sql = "insert into CarritoLibro (id_carrito, id_libro)" + "values (id_carrito, id_libro)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_carrito", CarritoLibro.getId_carrito())
                    .addParameter("id_libro", CarritoLibro.getId_libro())
                    .executeUpdate();
            return CarritoLibro;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<CarritoLibro> getAll() {
        try (Connection conn = sql2o.open()) {
            return conn.createQuery("select from CarritoLibro order by id_carrito Asc ")
                    .executeAndFetch(CarritoLibro.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<CarritoLibro> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from CarritoLibro where id_carrito=:id")
                    .addParameter("id_carrito",id)
                    .executeAndFetch(CarritoLibro.class);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(CarritoLibro CarritoLibro, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update CarritoLibro set idCarrito=:idCarrito, idLibro=:idLibro where id=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_carrito", id)
                    .addParameter("id_libro", CarritoLibro.getId_libro())
                    .executeUpdate();
            return "CarritoLibro actulizado";
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from CarritoLibro where id_carrito=:id")
                    .addParameter("id_carrito",id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
}
