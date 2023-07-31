package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.UsuarioModel;
import com.libreriadelibros.api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;


    public UsuarioModel create(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }

    public List<UsuarioModel> getAll(){
        return (List<UsuarioModel>) usuarioRepository.findAll();
    }

    public UsuarioModel show(Long id){
        return usuarioRepository.findById(id).get();
    }

    public String update(UsuarioModel usuario, Long id){
        UsuarioModel usuarioUpdated;
        try {
            usuarioUpdated = show(id);
            updateUsuarioPrivate(usuario, usuarioUpdated);
            return "Usuario actualizada";
        }catch (Exception e){
            return "No existe el usuario de id:" + id;
        }
    }


    public String delete(Long id){
        usuarioRepository.deleteById(id);
        return "Usuario borrado correctamente";
    }

    public String updateUser(UsuarioModel usuario){
        String rol = usuario.getRolUsuario().getNombreRol();
        UsuarioModel usuarioUpdated;
        if(rol == "lector"){
            usuarioUpdated = show(usuario.getIdUsuario());
            updateUsuarioPrivate(usuario, usuarioUpdated);
            return "Usuario actualizado correctamente";
        }
        return "Debe ser usuario lector para poder actualizar sus datos";
    }

    private void updateUsuarioPrivate(UsuarioModel usuario, UsuarioModel usuarioUpdated) {
        usuarioUpdated.setNombre(usuario.getNombre());
        usuarioUpdated.setCorreoElectronico(usuario.getCorreoElectronico());
        usuarioUpdated.setFechaNacimiento(usuario.getFechaNacimiento());
        usuarioUpdated.setContrasena(usuario.getContrasena());
        usuarioUpdated.setFavoritos(usuario.getFavoritos());
        usuarioUpdated.setCarritos(usuario.getCarritos());
        usuarioUpdated.setBoletas(usuario.getBoletas());
        usuarioUpdated.setLibros(usuario.getLibros());
        usuarioUpdated.setMetodosDePago(usuario.getMetodosDePago());
        usuarioRepository.save(usuarioUpdated);
    }

    public String login(String correo, String pass){

        List<UsuarioModel> users = (List<UsuarioModel>) usuarioRepository.findAll();
        for(int i = 0; i < users.size(); i++){
            if(users.get(i).getCorreoElectronico() == correo && users.get(i).getContrasena()==pass)
                return  "Inicio de sesion exitoso";
            else
                return "Usuario o contraseña incorrectos";
        }
        return null;
    }


}
