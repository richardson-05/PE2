/*
    By: Richardson Mercedes
    https://github.com/richardson-05/University-project
*/
document.addEventListener("DOMContentLoaded", function() {

    // Get elements
    let openP1 = document.getElementById("btn-open_modalP1");
    let openP2 = document.getElementById("btn-open_modalP2");
    let openP3 = document.getElementById("btn-open_modalP3");
    let openP4 = document.getElementById("btn-open_modalP4");
    let openP5 = document.getElementById("btn-open_modalP5");
    let openP6 = document.getElementById("btn-open_modalP6");
    let openP7 = document.getElementById("btn-open_modalP7");
    let openP8 = document.getElementById("btn-open_modalP8");
    let openP9 = document.getElementById("btn-open_modalP9");
    let openP10 = document.getElementById("btn-open_modalP10");
    let openP11 = document.getElementById("btn-open_modalP11");
    let openP12 = document.getElementById("btn-open_modalP12");
    let modal_container = document.getElementById("dv-modal-container");
    let modal = document.querySelectorAll(".dv-modal")[0];
    let close = document.getElementById("btn-close_modal");

    let product_name = document.getElementById("modal-product_name");
    let product_description = document.getElementById("modal-product_description");
    let product_price = document.getElementById("product-price");

    let btn_buy = document.getElementById("btn-buy");



    openP1.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();
        //alert("Hola");

        product_name.textContent = "Monitor R-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Monitor de 23,8 pulgadas Full HD</li>
            <li>Ajuste de altura</li>
            <li>Altavoces integrados</li>
        </li>`
        product_price.textContent = "Precio: $10,000.00 DOP"
    });

    openP2.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "CPU A-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Caja de CPU</li>
            <li>Luces RGB</li>
        </ul>`;
        product_price.textContent = "Precio: $12,000.00 DOP";
    });

    openP3.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Teclado M-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Teclado mecánico</li>
            <li>Luces RGB y tecla FN</li>
            <li>7 estilos de luces</li>
        </ul>`
        product_price.textContent = "Precio: $1,000.00 DOP";
    });

    openP4.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Mouse Z-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Inalámbrico</li>
            <li>Óptico</li
        </ul>`
        product_price.textContent = "Precio: $500.00 DOP";
    });

    openP5.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Disco duro S-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Disco duro solido</li>
            <li>Marca: Samsung 1TB</li>
        </ul>`
        product_price.textContent = "Precio: $2,700.00 DOP";
    });

    openP6.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Memoria RAM H-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Memoria RAM</li>
            <li>Marca: HyperX</li>
            <li>8GB</li>
            <li>Velocidad: 4,000 MHz</li>
        </ul>`
        product_price.textContent = "Precio: $4,000.00 DOP";
    });

    openP7.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Memoria USB S-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Marco: SanDisk</li>
            <li>Almacenamiento: 16GB</li>
        </ul>`
        product_price.textContent = "Precio: $450.00 DOP";
    });

    openP8.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "UPS R-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Marca: DELL</li>
            <li>1,500 VA/900 W batería de respaldo</li>
            <li>10 tomas de corriente</li>
            <li>Regulación automática de tensión (AVR)</li>
        </ul>`
        product_price.textContent = "Precio: $5,000.00 DOP";
    });

    openP9.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Cable VGA A-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>1080p Full HD</li>
            <li>Longitud: 6 pies</li>
        </ul>`
        product_price.textContent = "Precio: $200.00 DOP";
    });

    openP10.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Cable HDMI M-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>1080p Full HD</li>
            <li>Longitud: 6 pies</li>
        </ul>`
        product_price.textContent = "Precio: $300.00 DOP";
    });

    openP11.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Cable USB 3.0 Z-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Longitud: 1 metro</li>
            <li>Tipo: macho a macho</li>
            <li>Velocidad: 5 Gigabits/s</li>
        </ul>`
        product_price.textContent = "Precio: $500.00 DOP";
    });

    openP12.addEventListener("click", (e) => {
        e.preventDefault();
        showModal();

        product_name.textContent = "Audifonos Gamer R-3000";
        product_description.innerHTML = `<ul style='list-style-position: inside;'>
            <li>Audifonos Gamer</li>
            <li>Inalámbrico</li>
            <li>Luces RGB</li>
            <li>Micrófono integrado</li>
        </ul>`
        product_price.textContent = "Precio: $850.00 DOP";
    });

    close.addEventListener("click", () => {
        hideModal();
    });

    function showModal() {
        modal_container.style.opacity = "1";
        modal_container.style.visibility = "visible";
        modal.classList.toggle("modal-hide");
    }

    function hideModal() {
        modal.classList.toggle("modal-hide");
        setTimeout(() => {
            modal_container.style.opacity = "0";
            modal_container.style.visibility = "hidden";
        }, 470);
    }

    btn_buy.addEventListener("click", () => {
        //alert("A");
        //e.preventDefault();
        //hideModal();
        buyPage();
    });

    function buyPage(){
        window.location = "./buy-page.html";
    }
    
});