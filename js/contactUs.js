/*
    By: Richardson Mercedes
    https://github.com/richardson-05/University-project
*/
document.addEventListener("DOMContentLoaded", function() {
    // Validate form contact us
    // Get elements
    const inp_name = document.getElementById("inp-name");
    const inp_lastname = document.getElementById("inp-lastname");
    const inp_email = document.getElementById("inp-email");
    const btn_cocatacUS = document.getElementById("btn-send_contactUs");
    const greenAlert = document.getElementById("dv-green_alert");
    const inp_message = document.getElementById("inp-message");

    btn_cocatacUS.addEventListener("click", (e) => {
        //console.log("Something");

        e.preventDefault();

        // All = ""
        if (inp_name.value == "" && inp_lastname.value == "" && inp_email.value == "" && inp_message.value == "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        // Only name
        else if (inp_name.value == "" && inp_lastname.value != "" && inp_email.value != "" && inp_message.value != "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "none";
        }

        else if (inp_name.value != "" && inp_lastname.value == "" && inp_email.value == "" && inp_message.value == "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        // Only lastname
        else if (inp_name.value != "" && inp_lastname.value == "" && inp_email.value != "" && inp_message.value != "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "none";
        }

        else if (inp_name.value == "" && inp_lastname.value != "" && inp_email.value == "" && inp_message.value == "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        // Only email
        else if (inp_name.value != "" && inp_lastname.value != "" && inp_email.value == "" && inp_message.value != "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "none";
        }

        else if (inp_name.value == "" && inp_lastname.value == "" && inp_email.value != "" && inp_message.value == "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        // Only message
        else if (inp_name.value != "" && inp_lastname.value != "" && inp_email.value != "" && inp_message.value == "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        else if (inp_name.value == "" && inp_lastname.value == "" && inp_email.value == "" && inp_message.value != "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "none";
        }

        // Name and lastname
        else if (inp_name.value == "" && inp_lastname.value == "" && inp_email.value != "" && inp_message.value != "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "none";
        }

        else if (inp_name.value != "" && inp_lastname.value != "" && inp_email.value == "" && inp_message.value == "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        // Name and email
        else if (inp_name.value == "" && inp_lastname.value != "" && inp_email.value == "" && inp_message.value != "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "none";
        }

        else if (inp_name.value != "" && inp_lastname.value == "" && inp_email.value != "" && inp_message.value == "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        // Name and message
        else if (inp_name.value == "" && inp_lastname.value != "" && inp_email.value != "" && inp_message.value == "") {
            inp_name.style.boxShadow = "0px 0px 5px 1px red";
            inp_lastname.style.boxShadow = "none";
            inp_email.style.boxShadow = "none";
            inp_message.style.boxShadow = "0px 0px 5px 1px red";
        }

        else if (inp_name.value != "" && inp_lastname.value == "" && inp_email.value == "" && inp_message.value != "") {
            inp_name.style.boxShadow = "none";
            inp_lastname.style.boxShadow = "0px 0px 5px 1px red";
            inp_email.style.boxShadow = "0px 0px 5px 1px red";
            inp_message.style.boxShadow = "none";
        }

        else {
            if (!inp_email.value.includes("@")) {
                //console.log("No @");
                //alert("Hace falta la @");
                greenAlert.style.background = "#f8d7da";
                greenAlert.style.borderColor = "#f5c2c7"
                greenAlert.style.color = "#842029";
                greenAlert.innerHTML = 'Se necesita "@" para identificar el correo';
                greenAlert.style.display = "block";
                setTimeout(hideAlert, 3000);

            } else if (!inp_email.value.includes(".com")) {
                //console.log("No .com");
                //alert("Hace falta una extensión de correo Ejemplo: gmail.com");
                greenAlert.style.background = "#f8d7da";
                greenAlert.style.borderColor = "#f5c2c7"
                greenAlert.style.color = "#842029";
                greenAlert.innerHTML = "Especifique su proveedor de correo, ejemplo: gmail.com";
                greenAlert.style.display = "block";
                setTimeout(hideAlert, 3000);
            } else {
                inp_name.style.boxShadow = "none";
                inp_lastname.style.boxShadow = "none";
                inp_email.style.boxShadow = "none";
                inp_message.style.boxShadow = "none";
         
                greenAlert.style.background = "#9cdfc1";
                greenAlert.style.borderColor = "#95cfb5"
                greenAlert.style.color = "#0f5132";
                greenAlert.innerHTML = "Mensaje enviado";
                greenAlert.style.display = "block";

                clearInputs();
                greenAlert.style.display = "block";
                setTimeout(hideAlert, 5000);
            }
        }
    });

    const clearInputs = () => {
        inp_name.value = "";
        inp_lastname.value = "";
        inp_email.value = "";
        inp_message.value = "";
    }

    function hideAlert() {
        greenAlert.style.display = "none";
    }

});