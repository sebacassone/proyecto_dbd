package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.UbicacionGeografica;
import libreriadelibros.libreriadelibros_api.repositories.UbicacionGeograficaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class UbicacionGeograficaService implements UbicacionGeograficaRepository {

    @Autowired
    private Sql2o sql2o;


    @Override
    public UbicacionGeografica create(UbicacionGeografica ubicacionGeografica) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO UbicacionGeografica (id_ubicacion, paisOrigen, ciudad, codigoPostal)" + "VALUES (id_ubicacion, paisOrigen, ciudad, codigoPostal)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_ubicacion", ubicacionGeografica.getId_ubicacion())
                    .addParameter("paisOrigen", ubicacionGeografica.getPaisOrigen())
                    .addParameter("ciudad", ubicacionGeografica.getCiudad())
                    .addParameter("codigoPostal", ubicacionGeografica.getCodigoPostal())
                    .executeUpdate();
            return ubicacionGeografica;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UbicacionGeografica> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from UbicacionGeografica order by id_ubicacion asc")
                    .executeAndFetch(UbicacionGeografica.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<UbicacionGeografica> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from UbicacionGeografica where id_ubicacion=:id ")
                    .addParameter("id_ubicacion",id)
                    .executeAndFetch(UbicacionGeografica.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(UbicacionGeografica ubicacionGeografica, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update UbicacionGeografica set paisOrigen=:paisOrigen, ciudad=:ciudad, codigoPostal=:codigoPostal where id_ubicacion=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_ubicacion", id)
                    .addParameter("paisOrigen", ubicacionGeografica.getPaisOrigen())
                    .addParameter("ciudad", ubicacionGeografica.getCiudad())
                    .addParameter("codigoPostal", ubicacionGeografica.getCodigoPostal())
                    .executeUpdate();
            return "Ubicacion geografica actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar ubicacion geografica";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from UbicacionGeografica where id_ubicacion=:id")
                    .addParameter("id_ubicacion", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
