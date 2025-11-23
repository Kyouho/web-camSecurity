const API_SERIAL = "https://api-camara.vercel.app/get/serial";


let general_ip = 0

async function cargarSerial() {
    const camera = document.getElementById('camera')
    try {
        const res = await fetch(API_SERIAL, { cache: "no-store" });
        const data = await res.json();

        const contenedor = document.getElementById("serial-box");
        contenedor.innerHTML = "";

        // Orden: más nuevos primero
        const ordenado = [...data].sort((a, b) => b.id - a.id);

        ordenado.forEach(log => {
            const line = document.createElement("div");
            line.classList.add("serial-line");

            line.innerHTML = `
                <p>
                    <b>${log.date}</b> | 
                    <b>${log.time}</b> — 
                    ${log.content}
                </p>
            `;

            contenedor.appendChild(line);
        });

        contenedor.scrollTop = 0;

        const max = ordenado.reduce((a, b) => a.id > b.id ? a : b)
        const id = document.getElementById("id");
        const old_id = document.getElementById("id-content")

        if (old_id) old_id.remove()

        const line = document.createElement("p");
        line.textContent = max.ip
        general_ip = max.ip
        line.id = "id-content"
        id.appendChild(line)
        camera.src = `http://${general_ip}/stream`

        const schedule = ordenado.filter(x => x.content.toLowerCase().includes('horario'))


        const schedule_label = document.getElementById('schedule')
        const old_schedule = document.getElementById("schedule-content")

        if (old_schedule) old_schedule.remove()

        const line_schedule = document.createElement("p");
        line_schedule.textContent = schedule[0].content
        line_schedule.id = "schedule-content"
        schedule_label.appendChild(line_schedule)

        const time_label = document.getElementById('time')
        const old_time = document.getElementById("time-content")
        const old_time2 = document.getElementById("time-content2")

        if (old_time) old_time.remove()
        if (old_time2) old_time2.remove()

        const line_time = document.createElement("p");
        const line_time2 = document.createElement("p");
        line_time.textContent = max.time
        line_time.id = "time-content"
        time_label.appendChild(line_time)

        line_time2.textContent = max.date
        line_time2.id = "time-content2"
        time_label.appendChild(line_time2)



    } catch (err) {
        console.error("Error cargando serial:", err);
    }
}



document.addEventListener("DOMContentLoaded", () => {
    cargarSerial();
    setInterval(cargarSerial, 8000);
});


