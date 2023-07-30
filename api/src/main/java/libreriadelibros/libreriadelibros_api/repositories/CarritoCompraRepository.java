package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.CarritoCompra;

import java.util.List;

public interface CarritoCompraRepository {
    // C
    CarritoCompra create(CarritoCompra Carrito);
    // R
    List<CarritoCompra> getAll();
    List<CarritoCompra> getBy(CarritoCompra Carrito, String id);
    // U
    String update(CarritoCompra Carrito, String id);
    // D
    void delete(String id);
}
