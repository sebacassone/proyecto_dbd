package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.FavoritosLibro;
import libreriadelibros.libreriadelibros_api.repositories.FavoritosLibrosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class FavoritosLibrosService implements FavoritosLibrosRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public FavoritosLibro create(FavoritosLibro favoritosLibro) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO FavoritosLibro (id_libro, id_favoritos)" + "VALUES (id_libro, id_favoritos)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_libro", favoritosLibro.getId_libro())
                    .addParameter("id_favoritos", favoritosLibro.getId_favoritos())
                    .executeUpdate();
            return favoritosLibro;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<FavoritosLibro> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from FavoritosLibro order by id_libro asc")
                    .executeAndFetch(FavoritosLibro.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<FavoritosLibro> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from FavoritosLibro where id_libro=:id ")
                    .addParameter("id_libro",id)
                    .executeAndFetch(FavoritosLibro.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(FavoritosLibro favoritosLibro, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update FavoritosLibro set id_favoritos=:id_favoritos where id_libro=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_libro", id)
                    .addParameter("id_favoritos", favoritosLibro.getId_favoritos())
                    .executeUpdate();
            return "FavoritosLibro actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar favoritosLibro";
        }
    }

    @Override
    public void delete(String id) {
        try (Connection conn = sql2o.open()) {
            conn.createQuery("delete from FavoritosLibro where id_libro=:id")
                    .addParameter("id_libro", id)
                    .executeUpdate();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}



