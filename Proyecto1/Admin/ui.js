
pnombre();
logoute();
function logoute(){
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
    
    
function pnombre() {
    let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));//valida si la persona esta logueada si no lo devuelve al registro
    if (!personaDb) {
        document.getElementById("cnom").textContent = "none";
        alert("Favor Registrese");
        window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Login/index.html';
    } else {
        document.getElementById("cnom").textContent = personaDb.name;
        llenar();
    }

}
function llenar() {
    let productos = JSON.parse(localStorage.getItem('producto'));
    let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));

    for (i = 0; i < productos.length; i++) {
        console.log(personaDb.id);
        console.log(productos[i].idp);
        if (personaDb.id == productos[i].idp) {
            ///crear div
            var division = document.getElementById("grid");
            var iddd = productos[i].id;
            var divNota = document.createElement("div");
            divNota.setAttribute("id", iddd);
            divNota.setAttribute("class", "tags");
            division.appendChild(divNota);
            var divisionk = document.getElementById(iddd);
            ////////crear imagen
            var imagen = document.createElement('img');
            imagen.src = productos[i].foto;
            imagen.width = 100;
            imagen.height = 125;
            divisionk.appendChild(imagen);
            ///////crear etiqueta A
            var texto = document.createElement("a");
            texto.text = productos[i].name;
            texto.href = "C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Detalle_pro/index.html";
            let idpro = productos[i].id;
            texto.onclick = function () {
                capturaid(idpro);
            }//crea evento click para guardar el id del producto
            divisionk.appendChild(texto);

            /////////////crear boton ditar
            var boton = document.createElement('input');
            boton.type = 'button';
            boton.id = productos[i].id;
            boton.value = 'Editar';
            boton.classList.add("edi");
            boton.title = "editar pro";
            let cod = productos[i].id;//capturar el id del producto
            boton.onclick = function () {
                pasar_agremodi(cod);
            };

            divisionk.appendChild(boton);
            ///////////crear boton eliminar
            var botone = document.createElement('input');
            botone.type = 'button';
            botone.id = productos[i].id;
            botone.classList.add("eli");
            botone.value = 'Eliminar';
            botone.title = "eliminar pro";
            let code = productos[i].id;//capturar el id del producto
            botone.onclick = function () {
                eliminar(code);
            };
            var divisionk = document.getElementById(iddd);
            divisionk.appendChild(botone);
        }


    }

}
function pasar_agremodi(s) {
    sessionStorage.removeItem('idpro');
    window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/EDproducto/index.html';
    sessionStorage.setItem('idpro', JSON.stringify(s));//guarda el id del producto para despues ser consultado
}
function eliminar(cod) {
    let productos = JSON.parse(localStorage.getItem('producto'));
    let newpro = [];
    for (i = 0; i < productos.length; i++) {
        if (cod == productos[i].id) {//valida producto a eliminar

        } else {//si no entra se agrega a la lista que se va a guardar en la bd
            newpro.push(productos[i]);
        }
    }
    localStorage.setItem('producto', JSON.stringify(newpro));
    location.reload();

}
function capturaid(xz) {
    //alert(xz);
    sessionStorage.removeItem('idprover');
    sessionStorage.setItem('idprover', JSON.stringify(xz));//guarda el id del producto para despues ser consultado en del detlle
}