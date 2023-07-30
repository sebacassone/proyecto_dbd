package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.CategorizacionLibro;
import libreriadelibros.libreriadelibros_api.repositories.CategorizacionLibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class CategorizacionLibroService implements CategorizacionLibroRepository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public CategorizacionLibro create(CategorizacionLibro categorizacionLibro) {
        try(Connection conn = sql2o.open()){
            String sql = "insert into CategorizacionLibro (id_libro, id_categorizacion)" + "values (id_libro, id_categorizacion)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_libro", categorizacionLibro.getId_libro())
                    .addParameter("id_categorizacion", categorizacionLibro.getId_categorizacion())
                    .executeUpdate();
            return categorizacionLibro;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<CategorizacionLibro> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from CategorizacionLibro order by id_libro asc")
                    .executeAndFetch(CategorizacionLibro.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<CategorizacionLibro> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from CategorizacionLibro where id_libro=:id")
                    .addParameter("id_libro",id)
                    .executeAndFetch(CategorizacionLibro.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(CategorizacionLibro categorizacionLibro, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update CategorizacionLibro set id_categorizacion=:id_categorizacion where id_libro=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_libro", id)
                    .addParameter("id_cateogizacion", categorizacionLibro.getId_categorizacion())
                    .executeUpdate();
            return "CategorizacionLibro actualizada";
        }catch (Exception e){
            System.out.println(e.getMessage());
            return "Fallo al actualizar categorizacionLibro";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from CategorizacionLibro where id_libro=:id")
                    .addParameter("id_libro", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
