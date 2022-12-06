/*
    By: Richardson Mercedes
    https://github.com/richardson-05/University-project
*/
document.addEventListener("DOMContentLoaded", function() {
    
    // Get elements
    const nav_var = document.getElementById("dv-bar_nav");
    const dv_nav_bar_top = document.getElementById("dv-nav_bar-top");
    const nav_bar_top = document.getElementById("nav-bar_top");
    const btnMenu = document.getElementById("btn-menu");
    const nav = document.getElementById("nav-bar_top");
    const greenAlert = document.getElementById("dv-green_alert");

    nav_var.style.display = "none";

    // Get scroll position
    window.onscroll = function() {
        //console.log("Vertical: " + window.scrollY);
        //console.log("Horizontal: " + window.scrollX);
    
        if (window.scrollY > 600) {
            nav_var.style.display = "block";
            
            dv_nav_bar_top.style.display = "none";
            nav_bar_top.style.display = "none"
            //nav_bar_top.style.display = "none";
            /*nav_var.classList.remove("ocultar_menu");*/
            nav_var.classList.add("mostrar_menu");
        }
        else {
            nav_var.style.display = "none";
            dv_nav_bar_top.style.display = "flex";
            nav_bar_top.style.display = "block";

            nav.classList.remove("show");
            //nav.className += " ocultar";
            x = 0;
    
            /*nav_var.classList.remove("mostrar_menu");
            nav_var.classList.add("ocultar_menu");*/
        }

        //console.clear();
    };



    // Open and close the lateral menu
    let x = 0;
    btnMenu.addEventListener("click", function() {
        if (x == 0) {
            nav.classList.remove("hide");
            nav.className += " show";
            x = 1;
            //console.log(x);
        } else {
            nav.classList.remove("show");
            nav.className += " hide";
            x = 0;
            //console.log(x);
        }
    });


    /********** Add comment **********/

    // Errors of add comment
    var errorName, errorComent;
    errorName = document.getElementById("errorName");
    errorComent = document.getElementById("errorComent");

    // Btn to comment
    var btnComent = document.getElementById("btn-coment");
    btnComent.addEventListener("click", () => {
        // Validation of inputs
        var inpName, inpComent;
        inpName = document.getElementById("inp-name").value;
        if (inpName.charAt(0) == " ") {
            //alert("No se puede iniciar el nombre con un espacio en blanco.");
            greenAlert.style.background = "#f8d7da";
            greenAlert.style.borderColor = "#f5c2c7"
            greenAlert.style.color = "#842029";
            greenAlert.innerHTML = "No se puede iniciar el nombre con un espacio en blanco";
            greenAlert.style.display = "block";
            setTimeout(hideAlert, 5000);
        }
        else {

            inpComent = document.getElementById("inp-coment").value;
            
            if (inpComent.charAt(0) == " ") {
                //alert("No se puede iniciar un comentario con un espacio en blanco.");
                greenAlert.style.background = "#f8d7da";
                greenAlert.style.borderColor = "#f5c2c7"
                greenAlert.style.color = "#842029";
                greenAlert.innerHTML = "No se puede iniciar el comentario con un espacio en blanco";
                greenAlert.style.display = "block";
                setTimeout(hideAlert, 5000);
            } else {

                // Test
                //console.log("Nombre: " + inpName + " Comentario: " + inpComent);

                
                if (inpName == "" && inpComent == "") {
                    errorName.style.display = "block";
                    errorComent.style.display = "block";
                } else if (inpName.length > 25) {
                    errorName.textContent = "Nombre muy largo (máximo 25 caracteres)";
                    errorName.style.display = "block";
                } else if (inpName == "" && inpComent != "") {
                    errorName.style.display = "block";
                    errorComent.style.display = "none";
                } else if (inpComent.length > 200) {
                    errorComent.textContent = "Comentario muy largo (máximo 200 caracteres)";
                    errorComent.style.display = "block";
                } else if (inpComent == "" && inpName != "") {
                    errorComent.style.display = "block";
                    errorName.style.display = "none";
                } else {
                    errorName.style.display = "none";
                    errorComent.style.display = "none";

                    addCommentToList();

                    clearInputs();
                }
            }
        }
    });


    // Clear inputs
    function clearInputs() {
        document.getElementById("inp-name").value = "";
        document.getElementById("inp-coment").value = "";
    }


    // Add coment to the list
    /*
        const commentList = document.getElementById("comnt-list");
        const newComment = document.createElement("li");
        //newComment.textContent = "Nuevo";

        commentList.appendChild(newComment);
    */
    // Create the elements
    function addCommentToList() {
        const dvComent = document.createElement("div");
        dvComent.setAttribute("class", "dv-coment");
        const dvProfile = document.createElement("div");
        dvProfile.setAttribute("class", "dv-profile");
        const dvImgProfile = document.createElement("div");
        dvImgProfile.setAttribute("class", "imgProfile");
        const pName = document.createElement("p");
        pName.setAttribute("class", "name"); pName.textContent = document.getElementById("inp-name").value;
        const pComent = document.createElement("p");
        pComent.setAttribute("class", "coment"); pComent.textContent = document.getElementById("inp-coment").value;
        const comentDate = document.createElement("p");
        comentDate.setAttribute("class", "coment-date");
        var date = new Date();
        let realMonth;
        if (date.getMonth() < 10) {
            realMonth = "0";
        }
        //comentDate.textContent = "Buscar fecha";
        comentDate.textContent = "Fecha: " + date.getDate() + "/" + realMonth + (date.getMonth() + 1) + "/" + date.getFullYear();
       
        const commentList = document.getElementById("comnt-list");
        const newComment = document.createElement("li");
        newComment.setAttribute("class", "li-coment");
    
        commentList.appendChild(newComment);
        newComment.appendChild(dvComent);
        //commentList.appendChild(dvComent);
        dvComent.appendChild(dvProfile);
        dvProfile.appendChild(dvImgProfile);
        const inpNameLogo = document.getElementById("inp-name").value;
        dvImgProfile.innerHTML = inpNameLogo.charAt(0);
        dvProfile.appendChild(pName);
        dvComent.appendChild(pComent);
        dvComent.appendChild(comentDate);
    }

   
    // Show and hide the green alert
    const btnSuscribe = document.getElementById("btn-suscribe");
    
    btnSuscribe.addEventListener("click", () => {
        const inpEmail = document.getElementById("inp-email").value;
        const errorEmail = document.getElementById("errorEmail");
        
        if (inpEmail != "") {
            greenAlert.style.background = "#9cdfc1";
            greenAlert.style.borderColor = "#95cfb5"
            greenAlert.style.color = "#0f5132";
            greenAlert.innerHTML = "Gracias por suscribirte";

            greenAlert.style.display = "block";

            document.getElementById("inp-email").value = "";

            errorEmail.style.display = "none";
        } else {
            errorEmail.style.display = "block";
        }

        // setInterval (function, 3000) // Every 3 secods

        // setTimeout (function, 3000) // only after 3 seconds (only one time)
        
        setTimeout(hideAlert, 5000);
    });

    function hideAlert() {
        greenAlert.style.display = "none";
    }


    // Modal
    const btnSeeDetails = document.getElementById("see-details");
    const modal_container = document.getElementById("dv-modal-container");
    const modal = document.querySelectorAll(".dv-modal")[0];
    const close = document.getElementById("btn-close_modal");

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

    btnSeeDetails.addEventListener("click", (e) => {
        e.preventDefault();

        showModal();
    });

    close.addEventListener("click", () => {
        hideModal();
    });


    // Validate the program form
    // Get elements
    const namesProgram = document.getElementById("inp-names-program");
    const lastnamesProgram = document.getElementById("inp-lastnames-program");
    const telephoneProgram = document.getElementById("inp-telephone-program");
    const emailProgram = document.getElementById("inp-email-program");
    const countryProgram = document.getElementById("inp-country-program");
    const btnProgram = document.getElementById("btn-form-program");

    btnProgram.addEventListener("click", (e) => {
        e.preventDefault();

        if (namesProgram.value == "") {
            namesProgram.classList += " error-program";
        } else {
            namesProgram.classList.remove("error-program");
        }

        if (lastnamesProgram.value == "") {
            lastnamesProgram.classList += " error-program";
        } else {
            lastnamesProgram.classList.remove("error-program");
        }

        if (telephoneProgram.value == "") {
            telephoneProgram.classList += " error-program";   
        } else {
            telephoneProgram.classList.remove("error-program");
        }

        if (emailProgram.value == "") {
            emailProgram.classList += " error-program";
        } else {
            emailProgram.classList.remove("error-program");
        }

        if (countryProgram.value == "null") {
            countryProgram.classList += " error-program";
        } else {
            countryProgram.classList.remove("error-program");
        }

        if (namesProgram.value != "" && lastnamesProgram.value != "" && telephoneProgram.value != "" && emailProgram.value != "" && countryProgram.value != "null") {
            hideModal();
            showAlertProgram();
            clearInputsProgram();
        }
    });

    function clearInputsProgram() {
        namesProgram.value = "";
        lastnamesProgram.value = "";
        telephoneProgram.value = "";
        emailProgram.value = "";
        countryProgram.value = "";
    }

    function showAlertProgram() {
        greenAlert.style.background = "#9cdfc1";
        greenAlert.style.borderColor = "#95cfb5"
        greenAlert.style.color = "#0f5132";
        greenAlert.innerHTML = "Te has suscrito a nuestro programa de emprendedores. Felicidades!!!";
        greenAlert.style.display = "block";
        setTimeout(hideAlert, 5000);
    }
});
