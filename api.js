const GALERIA_ID = "galeria";
const API_URL = "https://api-camara.vercel.app/get/img";

async function cargarImagenes() {
    try {
        const res = await fetch(API_URL, { cache: "no-store" });
        const data = await res.json();

        const contenedor = document.getElementById(GALERIA_ID);

        // Limpiar antes de cargar
        contenedor.innerHTML = "";

        // Orden invertido: primero las más nuevas
        const invertidas = [...data].reverse();

        invertidas.forEach((imgObj) => {
            if (!imgObj.content) return;

            // --- Crear contenedor para cada imagen ---
            const box = document.createElement("div");
            box.classList.add("img-box");
            box.id = "img-box"
            // puedes cambiar el nombre si quieres

            // --- Imagen ---
            const img = document.createElement("img");
            img.src = "data:image/jpeg;base64," + imgObj.content;
            img.alt = "imagen_id_" + imgObj.id;

            // --- Fecha y hora ---
            const fecha = document.createElement("p");
            fecha.classList.add("fecha-img");
            fecha.textContent = `${imgObj.date} ${imgObj.time}`;

            //boton

            const boton = document.createElement("button")
            boton.textContent = "borrar"
            boton.classList.add('img-delete-button')
            boton.addEventListener('click', () => deleteByID())

            // Agregar elementos al div
            box.appendChild(img);
            box.appendChild(fecha);
            box.appendChild(boton)

            // Agregar a la galería
            contenedor.appendChild(box);
        });

    } catch (err) {
        console.error("Error cargando imágenes:", err);
    }
}

const deleteByID = async (id) => {
    const res = await fetch('https://api-camara.vercel.app/delete-img/by-id', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ id })
    })

    if (!res.ok) return

    const box = document.getElementById("galeria")
    box.innerHTML = ''

    alert('Imagen borrada')
}

document.addEventListener("DOMContentLoaded", cargarImagenes);

