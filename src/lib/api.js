// URL base del backend donde están expuestas las rutas de productos
const BASE_URL = 'http://localhost:3001/api/productos';
// Obtiene todos los productos (GET /api/productos)
export async function getProductos() {
const res = await fetch(BASE_URL); // Hace la solicitud al backend
return res.json(); // Devuelve la respuesta como JSON
}
// Obtiene un solo producto por ID (GET /api/productos/:id)
export async function getProducto(id) {
const res = await fetch(`${BASE_URL}/${id}`);
return res.json();
}
// Crea un nuevo producto (POST /api/productos)
export async function createProducto(producto) {
const res = await fetch(BASE_URL, {
method: 'POST', // Método HTTP
headers: { 'Content-Type': 'application/json' }, // Encabezado que indica que se envía
body: JSON.stringify(producto) // Convierte el objeto JS a JSON
});
return res.json();
}
// Actualiza un producto por ID (PUT /api/productos/:id)
export async function updateProducto(id, producto) {
const res = await fetch(`${BASE_URL}/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(producto)
});
return res.json();
}
// Elimina un producto por ID (DELETE /api/productos/:id)
export async function deleteProducto(id) {
await fetch(`${BASE_URL}/${id}`, {
method: 'DELETE'
});
}