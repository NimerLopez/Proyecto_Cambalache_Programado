function llamado() {
    window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/EDproducto/index.html';
}
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
            alert("No Puedes estar en este lugar");
            window.location.href='C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/index.html'
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
            alert("No Puedes estar en este lugar");
            window.location.href='C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/index.html'
        }
        nuevo_a.href="#";
        var idnuevali=document.getElementById("l5c");
        idnuevali.appendChild(nuevo_a);


    }
    
    
}
function agregar() {
    let idproducto = JSON.parse(sessionStorage.getItem('idpro'));
    if (!idproducto) {///valida el id si esta vacio
        const name = $('#np').val();//captura nombre
        const descripcion = $('#dc').val();//captura descripcion
        const foto = $('#lk').val();//captura la foto
        const busco = $('#bo').val();//captura busco


        if (!name || !descripcion || !foto || !busco) {//valdia si los campos vacio
            alert("Campos Vacios");
        }
        else {
            let productos = JSON.parse(localStorage.getItem('producto'));
            let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));
            if (!productos) {
                productos = [];
            }
            let idpersona = personaDb.id;//se carga el id de la persona
            const au = {
                id: productos.length + 1,
                descripcion: descripcion,
                foto: foto,
                busco: busco,
                name: name,
                idp: idpersona
            }
            productos.push(au)

            localStorage.setItem('producto', JSON.stringify(productos));//agrega productos nuevos
            let pronuevo = JSON.parse(localStorage.getItem('pronuevo'));
            

            alert("Registro exitoso");
            window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Admin/index.html';
        }
    } else {
        Editar();
    }


}

function Editar() {
    const name = $('#np').val();//captura nombre
    const descripcion = $('#dc').val();//captura descripcion
    const foto = $('#lk').val();//captura la foto
    const busco = $('#bo').val();//captura busco
    if (!name || !descripcion || !foto || !busco) {//valdia si los campos vacio
        alert("Campos Vacios");
    }
    else {
        let productos = JSON.parse(localStorage.getItem('producto'));
        let idproducto = JSON.parse(sessionStorage.getItem('idpro'));

        for (i = 0; i < productos.length; i++) {
            if (idproducto == productos[i].id) {
                productos[i].descripcion = descripcion;
                productos[i].foto = foto;
                productos[i].busco = busco;
                productos[i].name = name;
                break;
            }
        }
        sessionStorage.removeItem('idpro');
        localStorage.setItem('producto', JSON.stringify(productos));
        alert("Modificacion exitoso");
        window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Admin/index.html';
    }

}
