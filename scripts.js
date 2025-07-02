//modal para ver detalles de productos
const modal = document.getElementById("modalProducto");
const cerrar = document.getElementById("cerrarModal");
const titulo = document.getElementById("modalTitulo");
const descripcion = document.getElementById("modalDescripcion");

document.querySelectorAll(".boton-ver").forEach((boton, index) => {
  boton.addEventListener("click", () => {
    // Limpia contenido anterior
    descripcion.innerHTML = "";

    if (index === 0) {
      titulo.innerText = "Honor 200 Lite";
      descripcion.innerHTML = `
          <li>Pantalla 6.7'' </li>
          <li>256 GB de almacenamiento</li>
          <li>Cámara 108MP + 5MP + 2MP</li>
          <li>Android 14</li>
        `;
    } else if (index === 1) {
      titulo.innerText = "Honor X6B Plus";
      descripcion.innerHTML = `
          <li>Pantalla 6.5"</li>
          <li>256 GB de almacenamiento</li>
          <li>Cámara doble 50MP+2MP</li>
          <li>Android 14</li>
        `;
    } else if (index === 2) {
      titulo.innerText = "Tecno Spark 30C";
      descripcion.innerHTML = `
          <li>Pantalla HD+ 6.7"</li>
          <li>256 GB + 8 GB RAM</li>
          <li>Cámara 50MP</li>
          <li>Android 14</li>
        `;
    } else if (index === 3) {
      titulo.innerText = "Motorola G85";
      descripcion.innerHTML = `
          <li>Pantalla OLED 6.7"</li>
          <li>256 GB + 8 GB RAM</li>
          <li>Cámara 50MP</li>
          <li>Android 14</li>
        `;
    } else if (index === 4) {
      titulo.innerText = "Samsung Galaxy A16";
      descripcion.innerHTML = `
          <li>Pantalla HD+ 6.7"</li>
          <li>128 GB + 4 GB RAM</li>
          <li>Cámara 50MP</li>
          <li>Android 14</li>
        `;
    }

    modal.style.display = "block";
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Mover galería de promociones
const carousel = document.getElementById("carousel");
const slides = carousel.children.length;
let index = 0;

function showSlide(i) {
  index = (i + slides) % slides;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

document
  .getElementById("prevBtn")
  .addEventListener("click", () => showSlide(index - 1));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 5000);

//Chat Bitrix
(function (w, d, u) {
  var s = d.createElement("script");
  s.async = true;
  s.src = u + "?" + ((Date.now() / 60000) | 0);
  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})(
  window,
  document,
  "https://cdn.bitrix24.mx/b34231453/crm/site_button/loader_1_qq146b.js"
);

//abrir chat de sucursal con botones
function abrirChatSucursal(nombreSucursal) {
  const mensaje = `Hola Sucursal ${nombreSucursal}`;

  // Copiar el mensaje al portapapeles
  // navigator.clipboard.writeText(mensaje).then(() => {
  //   console.log(`Mensaje copiado: ${mensaje}`);
  // });

  // Intentar encontrar el botón de Bitrix y simular clic
  let intentos = 0;
  const maxIntentos = 20;

  const intentarAbrir = () => {
    // Bitrix genera un botón con esta clase cuando el chat se carga
    const botonChat = document.querySelector(
      ".b24-widget-button-inner, .b24-widget-button-popup"
    );

    if (botonChat) {
      botonChat.click(); // simular clic para abrir el chat
      console.log("Chat abierto");
    } else {
      intentos++;
      if (intentos < maxIntentos) {
        setTimeout(intentarAbrir, 500); // reintenta cada 0.5 seg hasta 10 seg máx
      } else {
        alert(
          "No se pudo abrir el chat. Intenta manualmente desde el botón flotante."
        );
      }
    }
  };

  intentarAbrir();
}

//Ordenar sucursales al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const galeria = document.querySelector(".galeria-sucursales");
  const cards = Array.from(galeria.querySelectorAll(".sucursal-card"));

  cards.sort((a, b) => {
    const nombreA = a.querySelector("h3").textContent.trim().toLowerCase();
    const nombreB = b.querySelector("h3").textContent.trim().toLowerCase();
    return nombreA.localeCompare(nombreB);
  });

  cards.forEach((card) => galeria.appendChild(card)); // Reorganiza el DOM
});

//scroll horizontal de la galería de sucursales
window.addEventListener("DOMContentLoaded", () => {
  const galeria = document.querySelector(".galeria-sucursales");
  if (galeria) galeria.scrollLeft = 0;
});

//abrir mapa de Google Maps al hacer clic en una sucursal
function abrirMapa(url) {
  document.getElementById("iframe-mapa").src = url;
  document.getElementById("modal-mapa").style.display = "flex";
}

function cerrarMapa() {
  document.getElementById("modal-mapa").style.display = "none";
  document.getElementById("iframe-mapa").src = "";
}

// Chat Bitrix
(function (w, d, u) {
  const s = d.createElement("script");
  s.async = true;
  s.src = u + "?" + ((Date.now() / 60000) | 0);
  const h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})(
  window,
  document,
  "https://cdn.bitrix24.mx/b34231453/crm/site_button/loader_1_qq146b.js"
);

// Abrir chat automáticamente
function abrirChatSucursal(nombreSucursal) {
  const intentosMax = 20;
  let intentos = 0;

  const intentarAbrir = () => {
    const botonChat = document.querySelector(
      ".b24-widget-button-inner, .b24-widget-button-popup"
    );
    if (botonChat) {
      botonChat.click();
    } else if (intentos++ < intentosMax) {
      setTimeout(intentarAbrir, 500);
    } else {
      alert("No se pudo abrir el chat. Intenta manualmente.");
    }
  };

  intentarAbrir();
}

// Abrir mapa
function abrirMapa(url) {
  const modal = document.getElementById("modal-mapa");
  const iframe = document.getElementById("iframe-mapa");
  iframe.src = url;
  modal.style.display = "flex";
}

function cerrarMapa() {
  const modal = document.getElementById("modal-mapa");
  const iframe = document.getElementById("iframe-mapa");
  iframe.src = "";
  modal.style.display = "none";
}
