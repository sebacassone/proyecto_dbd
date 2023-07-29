package libreriadelibros.libreriadelibros_api.repositories;

import libreriadelibros.libreriadelibros_api.models.CarritoCompra;

import java.util.List;

public interface CarritoCompraRepository {
    // C
    CarritoCompra create(CarritoCompra Carrito);
    // R
    List<CarritoCompra> getAll(int id);
    CarritoCompra getBy(CarritoCompra Carrito, int id);
    // U
    String update(CarritoCompra Carrito, int id);
    // D
    void delete(int id);
}
