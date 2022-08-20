logout();
nuevoscambalaches();
function logout() {
    let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));//valida si la persona esta logueada si no lo devuelve al registro
    if (!personaDb) {
        document.getElementById("cl3").style.display = "block";
        document.getElementById("l3c").style.display = "block";
    } else {
        //crea el link
        document.getElementById("cl3").style.display = "none";
        var nuevolin = document.createElement("li");
        nuevolin.id = "cl4";//en el cssc para telefono se le hace un display none
        var id_div = document.getElementById("pmenu");
        id_div.appendChild(nuevolin);
        //crea el A

        var nuevo_a = document.createElement("a");
        nuevo_a.text = personaDb.name + " out";
        nuevo_a.onclick = function () {
            alert("Cerrar sesion");
            sessionStorage.removeItem('Usuario');//borra al usuario y refresaca la pagina
            location.reload();
        }
        nuevo_a.href = "#";
        var idnuevali = document.getElementById("cl4");
        idnuevali.appendChild(nuevo_a);

        ///telefono
        //crear li
        document.getElementById("l3c").style.display = "none";
        var nuevolin = document.createElement("li");
        nuevolin.id = "l5c";//en el css para computadora se le hace un display none
        var id_div = document.getElementById("submenu");
        id_div.appendChild(nuevolin);
        //crea el A

        var nuevo_a = document.createElement("a");
        nuevo_a.text = personaDb.name + " out";
        nuevo_a.onclick = function () {
            alert("Cerrar sesion");
            sessionStorage.removeItem('Usuario');//borra al usuario y refresaca la pagina
            location.reload();
        }
        nuevo_a.href = "#";
        var idnuevali = document.getElementById("l5c");
        idnuevali.appendChild(nuevo_a);


    }


}

function nuevoscambalaches() {
    let productos = JSON.parse(localStorage.getItem('producto'));
    let iduno = productos.length; //toma el ultimo elementos de la lista de productos
    let iddos = iduno - 1;//toma el penultimo elementos de la lista de productos
    var division = document.getElementById("fs2");
    var crear_a = document.createElement("a");
    crear_a.id = "uno";
    crear_a.href = "C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Detalle_pro/index.html";

    for (i = 0; i < productos.length; i++) {
        if (iduno - 1 == i) {
            let idpro = productos[i].id;
            crear_a.onclick = function () {
                capturaid(idpro);
            }//crea evento click para guardar el id del producto
            division.appendChild(crear_a);//modifica el dom con el nuevo A

            var imagen = document.createElement("img");
            imagen.src = productos[i].foto;
            imagen.width = 350;
            imagen.height = 300;
            var coda = document.getElementById("uno");
            coda.appendChild(imagen);
            var crear_p = document.createElement("p");
            crear_p.textContent = productos[i].name;
            division.appendChild(crear_p);
            break;
        }
    }
    ///2 
    var division = document.getElementById("fs3");
    var crear_a2 = document.createElement("a");
    crear_a2.id = "dos";
    crear_a2.href = "C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Detalle_pro/index.html";
    for (i = 0; i < productos.length; i++) {
        if (iddos - 1 == i) {
            let idpro = productos[i].id;
            crear_a2.onclick = function () {
                capturaid(idpro);
            }//crea evento click para guardar el id del producto
            division.appendChild(crear_a2);//modifica el dom con el nuevo A
            var imagen = document.createElement("img");
            imagen.src = productos[i].foto;
            imagen.width = 350;
            imagen.height = 300;
            var coda = document.getElementById("dos");
            coda.appendChild(imagen);
            var crear_p = document.createElement("p");
            crear_p.textContent = productos[i].name;
            division.appendChild(crear_p);
            break;
        }
    }
}
function capturaid(xz) {
    //alert(xz);
    sessionStorage.removeItem('idprover');
    sessionStorage.setItem('idprover', JSON.stringify(xz));//guarda el id del producto para despues ser consultado en del detlle
}