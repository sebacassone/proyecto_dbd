package libreriadelibros.libreriadelibros_api.services;

import libreriadelibros.libreriadelibros_api.models.Boleta;
import libreriadelibros.libreriadelibros_api.models.Usuario;
import libreriadelibros.libreriadelibros_api.repositories.UsuarioRepository;
import org.springframework.stereotype.Service;
import org.sql2o.Connection;
import org.sql2o.Sql2o;

import java.util.List;

@Service
public class UsuarioService implements UsuarioRepository {

    private Sql2o sql2o;


    @Override
    public Usuario create(Usuario usuario) {
        try (Connection conn = sql2o.open()){
            String sql = "INSERT INTO Usuario (id_usuario, nombre, correoElectronico, fechaNacimiento, alias, contraseña, id_favoritos, id_carrito, id_boleta)"
                    + "VALUES (id_usuario, nombre, correoElectronico, fechaNacimiento, alias, contraseña, id_favoritos, id_carrito, id_boleta)";
            conn.createQuery(sql, true)
                    .addColumnMapping("id_usuario", usuario.getId_usuario())
                    .addParameter("nombre", usuario.getNombre())
                    .addParameter("correoElectronico", usuario.getCorreoElectronico())
                    .addParameter("fechaNacimiento", usuario.getFechaNacimiento())
                    .addParameter("alias", usuario.getAlias())
                    .addParameter("id_favoritos", usuario.getId_favoritos())
                    .addParameter("id_carrito", usuario.getId_carrito())
                    .addParameter("id_boleta", usuario.getId_boleta())
                    .executeUpdate();
            return usuario;
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Usuario> getAll() {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Usuario order by id_usuario asc")
                    .executeAndFetch(Usuario.class);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Usuario> getBy(String id) {
        try(Connection conn = sql2o.open()){
            return conn.createQuery("select * from Usuario where id_usuario=:id ")
                    .addParameter("id_usuario",id)
                    .executeAndFetch(Usuario.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public String update(Usuario usuario, String id) {
        try(Connection conn = sql2o.open()){
            String updateSql = "update Usuario set nombre=:nombre, correoElectronico=:correoElectronico, fechaNacimiento=:fechaNacimiento," +
                    "alias=:alias, contraseña=:contraseña, id_favoritos=:id_favoritos," +
                    "id_carrito=:id_carrito, id_boleta=:id_boleta where id_usuario=:id";
            conn.createQuery(updateSql)
                    .addParameter("id_usuario", id)
                    .addParameter("nombre", usuario.getNombre())
                    .addParameter("correoElectronico", usuario.getCorreoElectronico())
                    .addParameter("fechaNacimiento", usuario.getFechaNacimiento())
                    .addParameter("alias", usuario.getAlias())
                    .addParameter("id_favoritos", usuario.getId_favoritos())
                    .addParameter("id_carrito", usuario.getId_carrito())
                    .addParameter("id_boleta", usuario.getId_boleta())
                    .executeUpdate();
            return "Usuario actualizada";
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return "Fallo al actualizar usuario";
        }
    }

    @Override
    public void delete(String id) {
        try(Connection conn = sql2o.open()){
            conn.createQuery("delete from usuario where id_usuario=:id")
                    .addParameter("id_usuario", id)
                    .executeUpdate();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
