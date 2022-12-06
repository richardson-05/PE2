/*
    By: Richardson Mercedes
    https://github.com/richardson-05/University-project
*/
document.addEventListener("DOMContentLoaded", function() {

    // Get elements
    const inp_name = document.getElementById("inp-name");
    const inp_telephone = document.getElementById("inp-telephone");
    const inp_email = document.getElementById("inp-email");
    const inp_card = document.getElementById("inp-card");
    const inp_country = document.getElementById("inp-country");
    const inp_address = document.getElementById("inp-address");
    const inp_note = document.getElementById("inp-note");
    const btn_confirm = document.getElementById("btn-confirm");
    const btn_back = document.getElementById("btn-back");
    const greenAlert = document.getElementById("dv-green_alert");

    btn_confirm.addEventListener("click", (e) => {
        e.preventDefault();

        // All = ""
        if (inp_name.value == "") {
            inp_name.classList.add("invalid");
        } else {
            inp_name.classList.remove("invalid");
        }

        if (inp_telephone.value == "") {
            inp_telephone.classList.add("invalid");
        } else {
            inp_telephone.classList.remove("invalid");
        }

        if (inp_email.value == "") {
            inp_email.classList.add("invalid");
        } else {
            inp_email.classList.remove("invalid");
        }

        if (inp_card.value == "") {
            inp_card.classList.add("invalid");
        } else {
            inp_card.classList.remove("invalid");
        }

        if (inp_country.value == "null") {
            inp_country.classList.add("invalid");
        } else {
            inp_country.classList.remove("invalid");
        }

        if (inp_address.value == "") {
            inp_address.classList.add("invalid");
        } else {
            inp_address.classList.remove("invalid");
        }

        if (inp_name.value != "" && inp_telephone.value != "" && inp_email.value != "" && inp_card.value != "" && inp_country.value != "null" && inp_address.value != "") {
            inp_name.classList.remove("invalid");
            inp_telephone.classList.remove("invalid");
            inp_email.classList.remove("invalid");
            inp_card.classList.remove("invalid");
            inp_country.classList.remove("invalid");
            inp_address.classList.remove("invalid");

            // Show alert
            greenAlert.style.background = "#9cdfc1";
            greenAlert.style.borderColor = "#95cfb5"
            greenAlert.style.color = "#0f5132";
            greenAlert.innerHTML = "Su compra se ha realizado. Gracias por confiar en nosotros.";

            greenAlert.style.display = "block";

            clearInputs();
            setTimeout(hideAlert, 5000);
        }
    });

    btn_back.addEventListener("click", (e) => {
        e.preventDefault();

        window.location = "./shop.html";
    });

    function hideAlert() {
        greenAlert.style.display = "none";
    }

    function clearInputs() {
        inp_name.value = "";
        inp_telephone.value = "";
        inp_email.value = "";
        inp_card.value = "";
        inp_country.value = "null";
        inp_address.value = "";
        inp_note.value = "";
    }
    
});