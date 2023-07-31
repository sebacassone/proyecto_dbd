-- Tabla metodo_de_pago
INSERT INTO metodo_de_pago (numero_tarjeta, nombre, titular, cvv, fecha_expiracion) VALUES (4878175203171229, 'Visa', 'Krista Goodwin', 478, '09/26');
INSERT INTO metodo_de_pago (numero_tarjeta, nombre, titular, cvv, fecha_expiracion) VALUES (4277459113682021, 'MasterMia', 'Margie Mante', 477, '07/24');
INSERT INTO metodo_de_pago (numero_tarjeta, nombre, titular, cvv, fecha_expiracion) VALUES (4366245716991048, 'Estado', 'Andre Littel', 071, '07/25');
INSERT INTO metodo_de_pago (numero_tarjeta, nombre, titular, cvv, fecha_expiracion) VALUES (4570074243061220, 'VisaPapa', 'Marcus Littel', 654, '08/23');
INSERT INTO metodo_de_pago (numero_tarjeta, nombre, titular, cvv, fecha_expiracion) VALUES (4333086385313571, 'Visa', 'Lucia Morar', 482, '05/28');
INSERT INTO metodo_de_pago (numero_tarjeta, nombre, titular, cvv, fecha_expiracion) VALUES (4906619747607186, 'Mach1', 'Harry Perez', 236, '12/25');

-- Tabla categorizacion
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (1, 'Terror');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (2, 'Aventuras');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (3, 'Romance');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (4, 'Novela');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (5, 'Fantasía');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (6, 'Misterio');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (7, 'Histórico');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (8, 'Suspenso');
INSERT INTO categorizacion (id_categorizacion, genero) VALUES (9, 'Infantil');

-- Tabla restriccion_edad
INSERT INTO restriccion_edad (id_restriccion_edad, edad_minima) VALUES (1, 18);
INSERT INTO restriccion_edad (id_restriccion_edad, edad_minima) VALUES (2, 6);
INSERT INTO restriccion_edad (id_restriccion_edad, edad_minima) VALUES (3, 14);
INSERT INTO restriccion_edad (id_restriccion_edad, edad_minima) VALUES (4, 4);
INSERT INTO restriccion_edad (id_restriccion_edad, edad_minima) VALUES (5, 21);
INSERT INTO restriccion_edad (id_restriccion_edad, edad_minima) VALUES (6, 0);

-- Tabla ubicacion_geo
INSERT INTO ubicacion_geo (id_ubicacion_geo, pais_origen, ciudad, codigo_postal) VALUES (1, 'Chile', 'Santiago','8320000');
INSERT INTO ubicacion_geo (id_ubicacion_geo, pais_origen, ciudad, codigo_postal) VALUES (2, 'Estados Unidos', 'Nueva York', '10001');
INSERT INTO ubicacion_geo (id_ubicacion_geo, pais_origen, ciudad, codigo_postal) VALUES (3, 'Brasil', 'Sao Paulo', '01000-000');
INSERT INTO ubicacion_geo (id_ubicacion_geo, pais_origen, ciudad, codigo_postal) VALUES (4, 'Alemania', 'Berlín', '10115');
INSERT INTO ubicacion_geo (id_ubicacion_geo, pais_origen, ciudad, codigo_postal) VALUES (5, 'Canadá', 'Toronto', 'M5A 1A1');

-- Tabla rol
INSERT INTO rol (id_rol, nombre_rol) VALUES (1, 'lector');
INSERT INTO rol (id_rol, nombre_rol) VALUES (2, 'admin');
INSERT INTO rol (id_rol, nombre_rol) VALUES (3, 'autor');

-- Tabla usuario
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (1, 'Krista Goodwin', 'krisg@ejemplo.com', '1990-01-01', 'Kris', '1234', 1);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (2, 'Margie Mante', 'margM@ejemplo.com', '1998-05-24', 'MM', 'contraseña', 2);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (3, 'Andre Littel', 'andresito@ejemplo.com', '2003-08-13', 'Andre', 'toby126', 3);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (4, 'Lucia Morar', 'luci123@ejemplo.com', '1970-12-01', 'Lucii123', 'tomas01', 1);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (5, 'Harry Perez', 'twodirection@ejemplo.com', '1985-11-05', 'harri', 'ilovu', 2);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (6, 'Franco Barria', 'frankitoxdelflow@gmail.com', '1420-03-11', 'jiji', 'holaxdxd', 3);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (7, 'Luisa Diaz', 'luisamiaumiauxd@gmail.com', '2001-04-24', 'mipololomecontrola', 'clavefacil', 1);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (8, 'Alfredo Vargas', 'vargo1@gmail.com', '1998-07-19', 'vargass', 'jijijiji37283', 2);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (9, 'Vicente Mieres', 'vicentemieres@gmail.com', '2001-09-23', 'elcarreatrabajos', 'carreonoobs', 3);
INSERT INTO usuario (id_usuario, nombre, correo_electronico, fecha_nacimiento, alias, contraseña, id_rol) VALUES (10, 'Barry Diaz', 'meowmewmiaumeow@gmail.com', '2023-02-04', 'mewmeawmeowmewmiaumeaw', 'miaumeowmauwmeaw', 1);

-- Tabla carrito
INSERT INTO carrito(id_carrito, estado, numero_tarjeta, id_usuario) VALUES (1, true, 4878175203171229, 1);
INSERT INTO carrito(id_carrito, estado, numero_tarjeta, id_usuario) VALUES (2, true, 4277459113682021, 2);
INSERT INTO carrito(id_carrito, estado, numero_tarjeta, id_usuario) VALUES (3, true, 4366245716991048, 3);
INSERT INTO carrito(id_carrito, estado, numero_tarjeta, id_usuario) VALUES (4, true, 4333086385313571, 4);
INSERT INTO carrito(id_carrito, estado, numero_tarjeta, id_usuario) VALUES (5, true, 4906619747607186, 5);

-- Tabla Boleta
INSERT INTO boleta(id_boleta, monto, id_carrito, id_usuario) VALUES (1, 25990, 1, 1);
INSERT INTO boleta(id_boleta, monto, id_carrito, id_usuario) VALUES (2, 10000, 2, 2);
INSERT INTO boleta(id_boleta, monto, id_carrito, id_usuario) VALUES (3, 20990, 3, 3);
INSERT INTO boleta(id_boleta, monto, id_carrito, id_usuario) VALUES (4, 12990, 4, 4);
INSERT INTO boleta(id_boleta, monto, id_carrito, id_usuario) VALUES (5, 8990, 5, 5);

-- Tabla favoritos
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (1, 2, 1);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (2, 4, 2);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (3, 1, 3);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (4, 1, 4);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (5, 3, 5);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (6, 2, 6);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (7, 0, 7);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (8, 0, 8);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (9, 0, 9);
INSERT INTO favoritos(id_favoritos, cantidad, id_usuario) VALUES (10, 0, 10);

-- Tabla libro
INSERT INTO libro(id_libro, titulo, stock, precio, vistas, link, idioma, id_restriccion_edad, id_ubicacion_geo)
VALUES (3, 'Encantando el Este', 9, 10000, 45, 'https://ejemplo.com/libro3', 'ES', 2, 3);
INSERT INTO libro(id_libro, titulo, stock, precio, vistas, link, idioma, id_restriccion_edad, id_ubicacion_geo)
VALUES (4, 'Aprende a leer', 67, 990, 12, 'https://ejemplo.com/libro4', 'ES', 4, 1);
INSERT INTO libro(id_libro, titulo, stock, precio, vistas, link, idioma, id_restriccion_edad, id_ubicacion_geo)
VALUES (5, 'Marios Friends', 12, 8990, 34, 'https://ejemplo.com/libro5', 'EN', 3, 5);
INSERT INTO libro(id_libro, titulo, stock, precio, vistas, link, idioma, id_restriccion_edad, id_ubicacion_geo)
VALUES (6, 'La casa de Mickey', 65, 12990, 84, 'https://ejemplo.com/libro6', 'ES', 1, 4);
INSERT INTO libro(id_libro, titulo, stock, precio, vistas, link, idioma, id_restriccion_edad, id_ubicacion_geo)
VALUES (11, 'El principito', 65, 29990, 84, 'https://ejemplo.com/libro10', 'ES', 6, 2);

-- Tabla Categorizacion Libro

INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (3, 2);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (3, 7);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (4, 9);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (4, 2);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (5, 5);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (5, 6);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (6, 9);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (6, 2);
INSERT INTO categorizacion_libro(id_libro, id_categorizacion) VALUES (11, 9);

-- Tabla FavoritosLibro
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (3, 2);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (4, 2);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (5, 3);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (6, 4);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (3, 5);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (4, 5);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (5, 5);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (6, 6);
INSERT INTO favoritos_libros(id_libro, id_favoritos) VALUES (11, 6);

-- Tabla Valoracion
INSERT INTO valoracion(id_valoracion, comentarios, puntuacion, id_usuario, id_libro) VALUES (1, 'Buen libro', 4, 1, 3);
INSERT INTO valoracion(id_valoracion, comentarios, puntuacion, id_usuario, id_libro) VALUES (2, 'Mal libro', 1, 2, 4);
INSERT INTO valoracion(id_valoracion, comentarios, puntuacion, id_usuario, id_libro) VALUES (3, 'Bonitas imágenes', 3, 3, 5);
INSERT INTO valoracion(id_valoracion, comentarios, puntuacion, id_usuario, id_libro) VALUES (4, 'Recomendado', 5, 1, 6);
INSERT INTO valoracion(id_valoracion, comentarios, puntuacion, id_usuario, id_libro) VALUES (5, 'Dificil de leer', 2, 5, 11);
INSERT INTO valoracion(id_valoracion, comentarios, puntuacion, id_usuario, id_libro) VALUES (6, 'Pésimo libro', 1, 4, 3);

-- Tabla UsuarioLibro
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (2, 3, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (2, 4, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (3, 3, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (4, 5, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (5, 3, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (5, 4, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (5, 5, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (5, 6, false);
INSERT INTO usuario_libro(id_usuario, id_libro, escrito) VALUES (8, 11, true);

-- Tabla CarritoLibro
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (1, 4);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (1, 5);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (2, 3);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (3, 5);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (3, 3);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (3, 4);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (4, 5);
INSERT INTO carrito_libro(id_carrito, id_libro) VALUES (5, 6);

-- Tabla UsuarioPago
INSERT INTO usuario_pago(id_usuario, numero_tarjeta) VALUES (1, 4878175203171229);
INSERT INTO usuario_pago(id_usuario, numero_tarjeta) VALUES (2, 4277459113682021);
INSERT INTO usuario_pago(id_usuario, numero_tarjeta) VALUES (3, 4366245716991048);
INSERT INTO usuario_pago(id_usuario, numero_tarjeta) VALUES (3, 4570074243061220);
INSERT INTO usuario_pago(id_usuario, numero_tarjeta) VALUES (4, 4333086385313571);
INSERT INTO usuario_pago(id_usuario, numero_tarjeta) VALUES (5, 4906619747607186);
