mostrardatos();
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
function mostrardatos() {
    let productos = JSON.parse(localStorage.getItem('producto'));
    let personaDb = JSON.parse(localStorage.getItem('persona'));
    let idproducto = JSON.parse(sessionStorage.getItem('idprover'));
    if (!idproducto) {
        document.getElementById("nomp").textContent = "none";
        alert("Producto no registrado");
        // window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Login/index.html';
    } else {
        let idper = "";
        for (i = 0; i < productos.length; i++) {
            if (idproducto == productos[i].id) {
                idper = productos[i].idp;
                //alert(idper);
                document.getElementById("fotop").src = productos[i].foto;
                document.getElementById("titu").innerHTML = productos[i].name;
                document.getElementById("a1").textContent = productos[i].descripcion;
                document.getElementById("a2").textContent = productos[i].busco;
                llenarNompersona(idper);
                //sessionStorage.removeItem('idprover'); //borra el producto buscado
                break;
            }
        }

    }
}
function llenarNompersona(id) {//busca el nombre de la persona
    let personaDb = JSON.parse(localStorage.getItem('persona'));
    for (i = 0; i < personaDb.length; i++) {
        if (id == personaDb[i].id) {
            document.getElementById("nomp").textContent = personaDb[i].name;
            break;
        }
    }

}