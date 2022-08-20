llenarCambalaches();
logout();
function logout(){
    let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));//valida si la persona esta logueada si no lo devuelve al registro
    if (!personaDb) {
        document.getElementById("cl3").style.display = "block";
        document.getElementById("l3c").style.display = "block";
    } else {
        //crea el link
        document.getElementById("cl3").style.display = "none";
        var nuevolin=document.createElement("li");
        nuevolin.id="cl4";//en el cssc para telefono se le hace un display none
        var id_div = document.getElementById("pmenu");
        id_div.appendChild(nuevolin);
        //crea el A

        var nuevo_a=document.createElement("a");
        nuevo_a.text=personaDb.name +" out";
        nuevo_a.onclick=function(){
            alert("Cerrar sesion");
            sessionStorage.removeItem('Usuario');//borra al usuario y refresaca la pagina
            location.reload();
        }
        nuevo_a.href="#";
        var idnuevali=document.getElementById("cl4");
        idnuevali.appendChild(nuevo_a);

        ///telefono
        //crear li
        document.getElementById("l3c").style.display = "none";
        var nuevolin=document.createElement("li");
        nuevolin.id="l5c";//en el css para computadora se le hace un display none
        var id_div = document.getElementById("submenu");
        id_div.appendChild(nuevolin);
        //crea el A

        var nuevo_a=document.createElement("a");
        nuevo_a.text=personaDb.name +" out";
        nuevo_a.onclick=function(){
            alert("Cerrar sesion");
            sessionStorage.removeItem('Usuario');//borra al usuario y refresaca la pagina
            location.reload();
        }
        nuevo_a.href="#";
        var idnuevali=document.getElementById("l5c");
        idnuevali.appendChild(nuevo_a);


    }
    
    
}
function llenarCambalaches() {
    let productos = JSON.parse(localStorage.getItem('producto'));
    let maxid = productos.length;
    for (i = 0; i < productos.length; i++) {//recorre la lista de productos
        maxid++;
        var id_espacio = document.getElementById("grid");
        //crear div
        var iddd = productos[i].id;
        var divNota = document.createElement("div");
        divNota.setAttribute("id", iddd);
        divNota.setAttribute("class", "tags");
        id_espacio.appendChild(divNota);
        //crear etiqueta A
        var captura_id_divcreado = document.getElementById(iddd);
        var crear_a = document.createElement("a");
        let id_a = i + 2;
        crear_a.id = maxid;
        let cod_prod = productos[i].id;
        crear_a.onclick = function () {
            capturaid(cod_prod);
        }
        crear_a.href = "C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Detalle_pro/index.html";
        captura_id_divcreado.appendChild(crear_a);
        //crear imagen
        var captura_id_a_creado = document.getElementById(maxid);
        var img = document.createElement("img");
        img.src = productos[i].foto;
        img.width = 100;
        img.height = 115;
        captura_id_a_creado.appendChild(img);
        //crear h6
        var crehhseis = document.createElement("h6");
        crehhseis.textContent = productos[i].name;
        captura_id_divcreado.appendChild(crehhseis);
        //crear p
        var crearp = document.createElement("p");
        let idp = productos[i].idp;
        let personaDb = JSON.parse(localStorage.getItem('persona'));
        let namep="";
        for (x = 0; x < personaDb.length; x++) {//recorre la lista de personas y saca el nombre del dueño del producto
            if (idp == personaDb[x].id) {
                 namep = personaDb[x].name;               
                break;
            }
        }
        
        crearp.textContent=namep;
        captura_id_divcreado.appendChild(crearp);
    }//fin for

}
// function llenarNompersona(id) {//busca el nombre de la persona
//     let personaDb = JSON.parse(localStorage.getItem('persona'));
//     for (i = 0; i < personaDb.length; i++) {
//         if (id == personaDb[i].id) {
//             let namep = personaDb[i].name;
//             return namep;
//             break;
//         }
//     }

// }
function capturaid(xz) {
    //alert(xz);
    sessionStorage.removeItem('idprover');
    sessionStorage.setItem('idprover', JSON.stringify(xz));//guarda el id del producto para despues ser consultado en del detlle
}