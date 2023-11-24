// Función para solicitar datos
const solicitarDato = (mensaje) => {
  return prompt(mensaje);
};

// Función para validar usuario
function validarUsuario(dato) {
  return dato !== null && dato !== "" && /^[A-Za-z\s]+$/.test(dato);
}

// Función para validar CUIT
function validarCUIT(dato) {
  return dato !== null && dato.length === 13 && /^\d{2}-\d{8}-\d{1}$/.test(dato);
}

// esta funcion loguin es mi programa principal 

function loguin() {
  let nombre;
  let apellido;
  let cuit;
  let datos = false; 


  
  while (!datos ){
     nombre = solicitarDato ("Ingrese su nombre")   
     apellido = solicitarDato ("Ingrese su apellido") 
     cuit = solicitarDato ("Ingrese su CUIT con el siguiente formato XX-XXXXXXXX-X")

     
    if (validarUsuario(nombre)&& validarUsuario(apellido)&&validarCUIT(cuit)){
        datos = true
    } else {
     alert ("Nombre, apellidos, o CUIT no validos. Ingrese nuevamente.")
    }
  }

  alert ("Registro correctamente. Su usuario es: " + nombre + " " + apellido)
  
}

function miFuncion() {
 loguin();
}


document.getElementById("submit").onclick = miFuncion;

// Definir productos
const productos = [
  { nombre: "Remera", marca: "Nike", precio: 20000.00 },
  { nombre: "Camisa", marca: "Adidas", precio: 30000.00 },
  { nombre: "Pantalón", marca: "Levis", precio: 25000.00 },
];

// Obtener elementos del DOM
const productosDiv = document.getElementById('productos');
const carritoUl = document.getElementById('carrito');
const totalSpan = document.getElementById('total');
const buscadorInput = document.getElementById('buscador');

// Inicializar carrito
const carrito = [];

function mostrarProductos(productosMostrados) {
  productosDiv.innerHTML = "";
  
  (productosMostrados || productos).forEach(producto => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';
      card.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h3 class="card-title">${producto.nombre}</h3>
                  <p class="card-text">Marca: ${producto.marca}</p>
                  <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                  <button class="btn btn-primary" onclick="agregarAlCarrito(${productos.indexOf(producto)})">Agregar al carrito</button>
              </div>
          </div>
      `;
      productosDiv.appendChild(card);
  });
}


// Agregar producto al carrito
function agregarAlCarrito(index) {
  const productoSeleccionado = productos[index];
  carrito.push(productoSeleccionado);
  mostrarCarrito();
  calcularTotal();
}

// Remover producto del carrito
function removerDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
  calcularTotal();
}


// Mostrar productos en el carrito
function mostrarCarrito() {
  carritoUl.innerHTML = "";
  carrito.forEach((producto, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
          ${producto.nombre} - $${producto.precio.toFixed(2)}
          <button class="btn btn-danger btn-sm" onclick="removerDelCarrito(${index})">Eliminar</button>
      `;
      carritoUl.appendChild(li);
  });
}

// Calcular el total de la compra
function calcularTotal() {
  let total = 0;
  carrito.forEach(producto => {
      total += producto.precio;
  });
  totalSpan.textContent = total.toFixed(2);
}

/// Filtrar productos por nombre
function filtrarProductos() {
  const filtro = buscadorInput.value.toLowerCase();
  const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro));
  mostrarProductos(productosFiltrados);
}

// Mostrar productos al cargar la página
mostrarProductos();

// Agregar evento de búsqueda
buscadorInput.addEventListener('input', filtrarProductos);