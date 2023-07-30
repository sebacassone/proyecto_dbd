package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Categorizacion;
import libreriadelibros.libreriadelibros_api.repositories.CategorizacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class CategorizacionService implements CategorizacionRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public Categorizacion create(Categorizacion categorizacion){
        try(Connection conn = sql2o.open()){
            String sql = "insert into Categorizacion (id_categorizacion, genero)" + "values (id_categorizacion, genero)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_categorizacion", categorizacion.getId_categorizacion())
                    .addParameter("genero", categorizacion.getGenero())
                    .executeUpdate();
            return categorizacion;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Categorizacion> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Categorizacion order by id_categorizacion asc")
                    .executeAndFetch(Categorizacion.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Categorizacion> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Categorizacion where id_categorizacion=:id")
                    .addParameter("id_categorizacion", id)
                    .executeAndFetch(Categorizacion.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Categorizacion categorizacion, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update categorizacion set genero=:genero where id_categorizacion=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_categorizacion", id)
                    .addParameter("genero", categorizacion.getGenero())
                    .executeUpdate();
            return "Categorizacion actualizada";
        }catch (Exception e){
            System.out.println(e.getMessage());
            return "Fallo al actualizar categorizacion";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from categorizacion where id_categorizacion=:id")
                    .addParameter("id_categorizacion", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }


}
