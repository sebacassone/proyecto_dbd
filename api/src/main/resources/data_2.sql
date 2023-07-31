-- POBLACIÓN TABLAS

-- Tabla MetodoDePago
INSERT INTO MetodoDePago (NumeroTarjeta, Nombre, Titular, cvv, FechaExpiracion) VALUES (4878175203171229, 'Visa', 'Krista Goodwin', 478, '09/26');
INSERT INTO MetodoDePago (NumeroTarjeta, Nombre, Titular, cvv, FechaExpiracion) VALUES (4277459113682021, 'MasterMia', 'Margie Mante', 477, '07/24');
INSERT INTO MetodoDePago (NumeroTarjeta, Nombre, Titular, cvv, FechaExpiracion) VALUES (4366245716991048, 'Estado', 'Andre Littel', 071, '07/25');
INSERT INTO MetodoDePago (NumeroTarjeta, Nombre, Titular, cvv, FechaExpiracion) VALUES (4570074243061220, 'VisaPapa', 'Marcus Littel', 654, '08/23');
INSERT INTO MetodoDePago (NumeroTarjeta, Nombre, Titular, cvv, FechaExpiracion) VALUES (4333086385313571, 'Visa', 'Lucia Morar', 482, '05/28');
INSERT INTO MetodoDePago (NumeroTarjeta, Nombre, Titular, cvv, FechaExpiracion) VALUES (4906619747607186, 'Mach1', 'Harry Perez', 236, '12/25');

-- Tabla Categorizacion
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (1, 'Terror');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (2, 'Aventuras');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (3, 'Romance');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (4, 'Novela');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (5, 'Fantasía');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (6, 'Misterio');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (7, 'Histórico');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (8, 'Suspenso');
INSERT INTO Categorizacion(ID_Categorizacion, Genero) VALUES (9, 'Infantil');

-- Tabla RestriccionEdad
INSERT INTO RestriccionEdad(ID_RestriccionEdad, EdadMinima) VALUES (1, 18);
INSERT INTO RestriccionEdad(ID_RestriccionEdad, EdadMinima) VALUES (2, 6);
INSERT INTO RestriccionEdad(ID_RestriccionEdad, EdadMinima) VALUES (3, 14);
INSERT INTO RestriccionEdad(ID_RestriccionEdad, EdadMinima) VALUES (4, 4);
INSERT INTO RestriccionEdad(ID_RestriccionEdad, EdadMinima) VALUES (5, 21);
INSERT INTO RestriccionEdad(ID_RestriccionEdad, EdadMinima) VALUES (6, 0);

-- Tabla UbicacionGeo
INSERT INTO UbicacionGeo(ID_UbicacionGeo, PaisOrigen, Ciudad, CodigoPostal) VALUES (1, 'Chile', 'Santiago','8320000');
INSERT INTO UbicacionGeo(ID_UbicacionGeo, PaisOrigen, Ciudad, CodigoPostal) VALUES (2, 'Estados Unidos', 'Nueva York', '10001');
INSERT INTO UbicacionGeo(ID_UbicacionGeo, PaisOrigen, Ciudad, CodigoPostal) VALUES (3, 'Brasil', 'Sao Paulo', '01000-000');
INSERT INTO UbicacionGeo(ID_UbicacionGeo, PaisOrigen, Ciudad, CodigoPostal) VALUES (4, 'Alemania', 'Berlín', '10115');
INSERT INTO UbicacionGeo(ID_UbicacionGeo, PaisOrigen, Ciudad, CodigoPostal) VALUES (5, 'Canadá', 'Toronto', 'M5A 1A1');

-- Tabla rol
INSERT INTO Rol (ID_Rol, NombreRol) VALUES (1, 'lector');
INSERT INTO Rol (ID_Rol, NombreRol) VALUES (2, 'admin');
INSERT INTO Rol (ID_Rol, NombreRol) VALUES (3, 'autor');

-- Tabla Usuario
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (1, 'Krista Goodwin', 'krisg@ejemplo.com', '1990-01-01', 'Kris', '1234', 1);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (2, 'Margie Mante', 'margM@ejemplo.com', '1998-05-24', 'MM', 'contraseña', 2);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (3, 'Andre Littel', 'andresito@ejemplo.com', '2003-08-13', 'Andre', 'toby126', 3);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (4, 'Lucia Morar', 'luci123@ejemplo.com', '1970-12-01', 'Lucii123', 'tomas01', 1;
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (5, 'Harry Perez', 'twodirection@ejemplo.com', '1985-11-05', 'harri', 'ilovu', 2);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (6, 'Franco Barria', 'frankitoxdelflow@gmail.com', '1420-03-11', 'jiji', 'holaxdxd', 3);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (7, 'Luisa Diaz', 'luisamiaumiauxd@gmail.com', '2001-04-24', 'mipololomecontrola', 'clavefacil', 1);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (8, 'Alfredo Vargas', 'vargo1@gmail.com', '1998-07-19', 'vargass', 'jijijiji37283', 2);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (9, 'Vicente Mieres', 'vicentemieres@gmail.com', '2001-09-23', 'elcarreatrabajos', 'carreonoobs', 3);
INSERT INTO Usuario (ID_Usuario, Nombre, CorreoElectronico, FechaNacimiento, Alias, Contraseña, ID_Rol)
VALUES (10, 'Barry Diaz', 'meowmewmiaumeow@gmail.com', '2023-02-04', 'mewmeawmeowmewmiaumeaw', 'miaumeowmauwmeaw', 1);


-- Tabla Carrito
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (1, true, 4878175203171229, 1);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (2, true, 4277459113682021, 2);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (3, true, 4366245716991048, 3);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (4, true, 4333086385313571, 4);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (5, true, 4906619747607186, 5);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (6, true, 4906619747607186, 6);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (7, true, 4906619747607186, 7);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (8, true, 4906619747607186, 8);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (9, true, 4906619747607186, 9);
INSERT INTO Carrito(ID_Carrito, Estado, NumeroTarjeta, ID_Usuario) VALUES (10, true, 4906619747607186, 10);

-- Tabla Boleta
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (1, 25990, 1, 1);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (2, 10000, 2, 2);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (3, 20990, 3, 3);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (4, 12990, 4, 4);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (5, 8990, 5, 5);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (6, 0, 6, 6);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (7, 0, 7, 7);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (8, 0, 8, 8);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (9, 0, 9, 9);
INSERT INTO Boleta(ID_Boleta, Monto, ID_Carrito, ID_Usuario) VALUES (10, 0, 10, 10);

-- Tabla favoritos
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (1, 2, 1);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (2, 4, 2);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (3, 1, 3);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (4, 1, 4);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (5, 3, 5);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (6, 2, 6);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (7, 0, 7);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (8, 0, 8);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (9, 0, 9);
INSERT INTO Favoritos (ID_Favoritos, Cantidad, ID_Usuario) VALUES (10,0, 10);

-- Tabla libro
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (1, 'Oficial de la perfección', 10, 10000, 35, 'https://ejemplo.com/libro1', 'ES', 1, 1);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (2, 'Adopting The Light', 15, 15990, 12,'https://ejemplo.com/libro2', 'EN', 1, 2);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (3, 'Encantando el Este', 9, 10000, 45, 'https://ejemplo.com/libro3', 'ES', 2, 3);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (4, 'Aprende a leer', 67, 990, 12, 'https://ejemplo.com/libro4', 'ES', 4, 1);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (5, 'Marios Friends', 12, 8990, 34, 'https://ejemplo.com/libro5', 'EN', 3, 5);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (6, 'La casa de Mickey', 65, 12990, 84, 'https://ejemplo.com/libro6', 'ES', 1, 4);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (7, 'El misterio', 15, 30990, 53, 'https://ejemplo.com/libro7', 'ES', 1, 1);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (8, 'La arpía', 32, 10990, 21, 'https://ejemplo.com/libro8', 'ES',1, 1);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (9, 'Tren al sur', 13, 5990, 38, 'https://ejemplo.com/libro9', 'ES',1, 1);
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (10, 'Tren al norte', 54, 8990, 48, 'https://ejemplo.com/libro10', 'ES',1, 1);

-- libro utilizado para añadir y eliminar del carrito
INSERT INTO Libro(ID_Libro, Titulo, Stock, Precio, Vistas, Link, Idioma, ID_RestriccionEdad, ID_UbicacionGeo)
VALUES (11, 'El principito', 65, 29990, 84, 'https://ejemplo.com/libro10', 'ES', 6, 2);

-- Tabla Categorizacion Libro
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (1, 1);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (1, 8);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (2, 3);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (2, 4);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (3, 2);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (3, 7);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (4, 9);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (4, 2);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (5, 5);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (5, 6);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (6, 9);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (6, 2);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (7, 6);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (8, 6);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (9, 6);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (10,6);
INSERT INTO CategorizacionLibro (ID_Libro, ID_Categorizacion) VALUES (11,9);

-- Tabla Favoritoslibro
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (1, 1);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (2, 1);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (1, 2);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (2, 2);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (3, 2);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (4, 2);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (1, 3);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (2, 4);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (3,5);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (4,5);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (5,5);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (6,6);
INSERT INTO FavoritosLibros (ID_Libro, ID_Favoritos) VALUES (1,6);


-- Tabla Valoracion
INSERT INTO Valoracion (ID_Valoracion, Comentarios, Puntuacion, ID_Usuario, ID_Libro) VALUES (1, 'Buen libro', 4, 1, 1);
INSERT INTO Valoracion (ID_Valoracion, Comentarios, Puntuacion, ID_Usuario, ID_Libro) VALUES (2, 'Mal libro', 1, 2, 1);
INSERT INTO Valoracion (ID_Valoracion, Comentarios, Puntuacion, ID_Usuario, ID_Libro) VALUES (3, 'Bonitas imágenes', 3, 3, 2);
INSERT INTO Valoracion (ID_Valoracion, Comentarios, Puntuacion, ID_Usuario, ID_Libro) VALUES (4, 'Recomendado', 5, 1, 4);
INSERT INTO Valoracion (ID_Valoracion, Comentarios, Puntuacion, ID_Usuario, ID_Libro) VALUES (5, 'Dificil de leer', 2, 5, 5);
INSERT INTO Valoracion (ID_Valoracion, Comentarios, Puntuacion, ID_Usuario, ID_Libro) VALUES (6, 'Pésimo libro', 1, 4, 3);

-- Tabla UsuarioLibro (Cualquier interaccion con un libro, se determina un bool que indíca si fue escrito por ese usuario)
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (1, 1, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (1, 2, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (2, 1, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (2, 2, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (2, 3, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (2, 4, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (3, 1, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (3, 3, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (4, 2, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (4, 5, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (5, 3, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (5, 4, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (5, 5, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (5, 6, false);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (7, 7, true);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (7, 8, true);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (7, 9, true);
INSERT INTO UsuarioLibro (ID_Usuario, ID_Libro, Escrito) VALUES (8, 10,true);

 
-- Tabla CarritoLibro
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (1, 1);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (1, 2);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (2, 3);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (3, 1);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (3, 3);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (3, 4);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (4, 5);
INSERT INTO CarritoLibro (ID_Carrito, ID_Libro) VALUES (5, 6);

-- Tabla UsuarioPago
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (1, 4878175203171229);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (2, 4277459113682021);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (3, 4366245716991048);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (3, 4570074243061220);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (4, 4333086385313571);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (5, 4906619747607186);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (6, 4906619747607186);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (7, 4906619747607186);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (8, 4906619747607186);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (9, 4906619747607186);
INSERT INTO UsuarioPago(ID_Usuario, NumeroTarjeta) VALUES (10, 4906619747607186);
