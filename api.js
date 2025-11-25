const GALERIA_ID = "galeria";
const API_URL = "https://api-camara.vercel.app/get/img";

let invert = []

async function cargarImagenes() {
    try {
        const res = await fetch(API_URL, { cache: "no-store" });
        const data = await res.json();

        const contenedor = document.getElementById(GALERIA_ID);

        // Limpiar antes de cargar
        contenedor.innerHTML = "";

        // Orden invertido: primero las más nuevas
        const invertidas = [...data].reverse();

        invert = invertidas

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
            boton.addEventListener('click', () => {
                deleteByID(imgObj.id)
                box.remove()
            })

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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    })


    if (!res.ok) return

}

function last24h() {
    const contenedor = document.getElementById(GALERIA_ID);
    contenedor.innerHTML = "";

    const arr = invert
    const ahora = Date.now()
    const limite = ahora - 24 * 60 * 60 * 1000

    const target = arr.filter(x => {
        const d = new Date(x.date + ' ' + x.time).getTime()

        if (d >= limite) return x
    })

    target.forEach((imgObj) => {
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
        boton.addEventListener('click', () => {
            deleteByID(imgObj.id)
            box.remove()
        })

        // Agregar elementos al div
        box.appendChild(img);
        box.appendChild(fecha);
        box.appendChild(boton)

        // Agregar a la galería
        contenedor.appendChild(box);
    });

}

function lastweek() {
    const contenedor = document.getElementById(GALERIA_ID);
    contenedor.innerHTML = "";

    const arr = invert
    const ahora = Date.now()
    const limite = ahora - 7 * 24 * 60 * 60 * 1000

    const target = arr.filter(x => {
        const d = new Date(x.date + ' ' + x.time).getTime()

        if (d >= limite) return x
    })

    target.forEach((imgObj) => {
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
        boton.addEventListener('click', () => {
            deleteByID(imgObj.id)
            box.remove()
        })

        // Agregar elementos al div
        box.appendChild(img);
        box.appendChild(fecha);
        box.appendChild(boton)

        // Agregar a la galería
        contenedor.appendChild(box);
    });

}

function lastmonth() {
    const contenedor = document.getElementById(GALERIA_ID);
    contenedor.innerHTML = "";

    const arr = invert
    const ahora = Date.now()
    const limite = ahora - 30 * 24 * 60 * 60 * 1000

    const target = arr.filter(x => {
        const d = new Date(x.date + ' ' + x.time).getTime()

        if (d >= limite) return x
    })

    target.forEach((imgObj) => {
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
        boton.addEventListener('click', () => {
            deleteByID(imgObj.id)
            box.remove()
        })

        // Agregar elementos al div
        box.appendChild(img);
        box.appendChild(fecha);
        box.appendChild(boton)

        // Agregar a la galería
        contenedor.appendChild(box);
    });

}

function last6months() {
    const contenedor = document.getElementById(GALERIA_ID);
    contenedor.innerHTML = "";

    const arr = invert
    const ahora = Date.now()
    const limite = ahora - 180 * 24 * 60 * 60 * 1000

    const target = arr.filter(x => {
        const d = new Date(x.date + ' ' + x.time).getTime()

        if (d >= limite) return x
    })

    target.forEach((imgObj) => {
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
        boton.addEventListener('click', () => {
            deleteByID(imgObj.id)
            box.remove()
        })

        // Agregar elementos al div
        box.appendChild(img);
        box.appendChild(fecha);
        box.appendChild(boton)

        // Agregar a la galería
        contenedor.appendChild(box);
    });
}

const searchImg = () => {
    const contenedor = document.getElementById(GALERIA_ID);
    contenedor.innerHTML = "";
    
    const input = document.getElementById('search-input')
    const text = input.value.toLowerCase()

    const arr = invert

    const parts = text.toLowerCase().split(' ').filter(x => x)

    const target = arr.filter(x => {
        const full = (x.date + ' ' + x.time).toLowerCase()
        return parts.every(p => full.includes(p))
    })

    target.forEach((imgObj) => {
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
        boton.addEventListener('click', () => {
            deleteByID(imgObj.id)
            box.remove()
        })

        // Agregar elementos al div
        box.appendChild(img);
        box.appendChild(fecha);
        box.appendChild(boton)

        // Agregar a la galería
        contenedor.appendChild(box);
    });
}

document.addEventListener("DOMContentLoaded", cargarImagenes);

