package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.RestriccionEdad;
import libreriadelibros.libreriadelibros_api.repositories.RestriccionEdadRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;


@Service
public class RestriccionEdadService implements RestriccionEdadRespository {

    @Autowired
    private Sql2o sql2o;

    @Override
    public RestriccionEdad create(RestriccionEdad restriccionEdad) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO RestriccionEdad (id_restriccion, edadMinima)" + "VALUES (id_restriccion, edadMinima)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_restriccion", restriccionEdad.getId_restriccion())
                    .addParameter("edadMinima", restriccionEdad.getEdadMinima())
                    .executeUpdate();
            return restriccionEdad;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<RestriccionEdad> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from RestriccionEdad order by id_restriccion asc")
                    .executeAndFetch(RestriccionEdad.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<RestriccionEdad> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from RestriccionEdad where id_restriccion=:id ")
                    .addParameter("id_restriccion",id)
                    .executeAndFetch(RestriccionEdad.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(RestriccionEdad restriccionEdad, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update restriccionEdad set edadMinima=:edadMinima where id_restriccion=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_restriccion", id)
                    .addParameter("edadMinima", restriccionEdad.getEdadMinima())
                    .executeUpdate();
            return "Restriccion de edad actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar restriccion de edad";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from restriccionEdad where id_restriccion=:id")
                    .addParameter("id_restriccion", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
