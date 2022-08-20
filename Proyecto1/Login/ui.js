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
function login() {
    const correo = $('#core').val();//captura correo
    const contra = $('#cont').val();//captura contraseña
    let personaDb = JSON.parse(localStorage.getItem('persona'));
    let val="B";
    let nom="";
    for(i=0; i< personaDb.length; i++){//recorrer lista
        nom=personaDb[i].name;//captura el nombre
        if(correo==personaDb[i].correo && contra==personaDb[i].contraseña){//valida al usuario
            val="A";//si esta registrado
            break;
        }else{
            val="B";//no esta registrado
        }
        
    }
    if(val=="A"){//valida el registro        
        sessionStorage.clear();
        const au = {
            id:personaDb[i].id,
            name: personaDb[i].name,
            lastname: personaDb[i].lastname,
            dire: personaDb[i].dire,
            diredos: personaDb[i].diredos,
            pai: personaDb[i].pai,
            correo: personaDb[i].correo,
            contraseña: personaDb[i].contraseña
        }
        sessionStorage.setItem('Usuario',JSON.stringify(au));
        window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Admin/index.html';
    } else{
        alert("Usuario no registrado: "+correo);
    }    
}