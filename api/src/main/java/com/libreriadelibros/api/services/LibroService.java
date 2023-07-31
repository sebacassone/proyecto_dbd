package com.libreriadelibros.api.services;

import com.libreriadelibros.api.models.LibroModel;
import com.libreriadelibros.api.models.UsuarioModel;
import com.libreriadelibros.api.repositories.LibroRepository;
import com.libreriadelibros.api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LibroService {
    
    @Autowired
    private LibroRepository libroRepository;

    public LibroModel create(LibroModel libro){
        return libroRepository.save(libro);
    }

    public List<LibroModel> getAll(){
        return (List<LibroModel>) libroRepository.findAll();
    }

    public LibroModel show(Long id){
        return libroRepository.findById(id).get();
    }

    public String update(LibroModel libro, Long id){
        LibroModel libroUpdated;
        try {
            libroUpdated = show(id);
            libroUpdated.setTitulo(libro.getTitulo());
            libroUpdated.setStock(libro.getStock());
            libroUpdated.setPrecio(libro.getPrecio());
            libroUpdated.setVistas(libro.getVistas());
            libroUpdated.setLink(libro.getLink());
            libroUpdated.setIdioma(libro.getIdioma());
            libroUpdated.setIdRestriccionEdad(libro.getIdRestriccionEdad());
            libroUpdated.setIdUbicacionGeo(libro.getIdUbicacionGeo());
//            libroUpdated.getCategorizaciones(libro.getCategorizaciones());
//            libroUpdated.getFavoritos(libro.getFavoritos());
//            libroUpdated.getCarritos(libro.getCarritos());
//            libroUpdated.getUsuarios(libro.getUsuarios());
            libroRepository.save(libroUpdated);
            return "Libro actualizado";
        }catch (Exception e){
            return "No existe el libro de id:" + id;
        }
    }

    public String delete(Long id){
        libroRepository.deleteById(id);
        return "Libro borrado correctamente";
    }

    public List<LibroModel> ranking() {
        List<LibroModel> libros = libroRepository.getAll();
        libros.sort(new Comparator<LibroModel>() {
            @Override
            public int compare(LibroModel libro1, LibroModel libro2) {
                return libro2.getVistas() - libro1.getVistas();
            }
        });

        return libros;
    }

    // obtiene el promedio de libros por autor
    public List<Integer> promLibByAutor(){

        UsuarioRepository usuarioRepository = null;
        List<UsuarioModel> users = usuarioRepository.getAll();

        List<LibroModel> libros = libroRepository.getAll();
        int cantidad = libros.size();

        List<Integer> prom = null;

        for (UsuarioModel user : users) {
            int contador = 0;
            for (int j = 0; j < cantidad; j++) {
                if (Objects.equals(libros.get(j).getUsuarios().get(j).getUsuarioLib().getIdUsuario(), user.getIdUsuario()))
                    contador++;
            }
            assert false;
            prom.add(contador / cantidad);
        }
        return prom;
    }

    public List<LibroModel> showByAge(UsuarioModel usuario){

        Date fechaNacimiento = usuario.getFechaNacimiento();

        Calendar fechaNacimientoCal = Calendar.getInstance();
        fechaNacimientoCal.setTime(fechaNacimiento);

        Calendar hoy = Calendar.getInstance();

        int edad = hoy.get(Calendar.YEAR) - fechaNacimientoCal.get(Calendar.YEAR);

        List<LibroModel> libros = libroRepository.getAll();

        if(edad < 18) {
            for (int i = 0; i < libros.size(); i++) {
                if (libros.get(i).getIdRestriccionEdad().getEdad() < 18)
                    libros.remove(i);
            }
        }
        return libros;
    }



    
}
