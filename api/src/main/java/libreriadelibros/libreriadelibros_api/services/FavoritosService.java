package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Favoritos;
import libreriadelibros.libreriadelibros_api.repositories.CategorizacionRepository;
import libreriadelibros.libreriadelibros_api.repositories.FavoritosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.ConcurrentModificationException;
import java.util.List;

@Service
public class FavoritosService implements FavoritosRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public Favoritos create(Favoritos favoritos){
        try(Connection conn = sql2o.open()){
            String sql = "insert into Favoritos (id_favoritos, cantidadLibros)" + "values (id_favoritos, cantidadLibros)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_favoritos", favoritos.getId_favoritos())
                    .addParameter("cantidadLibros", favoritos.getCantidadLibros())
                    .executeUpdate();
            return favoritos;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Favoritos> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Favoritos order by id_favoritos asc")
                    .executeAndFetch(Favoritos.class);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Favoritos> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Favoritos where id_favoritos=:id")
                    .addParameter("id_favoritos",id)
                    .executeAndFetch(Favoritos.class);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Favoritos favoritos, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update Favoritos set cantidadLibros=:cantidadLibros, id_favoritos=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_favoritos", id)
                    .addParameter("cantidadLibros", favoritos.getCantidadLibros())
                    .executeUpdate();
            return "Favoritos actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar favoritos";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from Favoritos where id_favoritos=:id")
                    .addParameter("id_favoritos", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }


}
