


function registro() {

    const name = $('#fn').val();//captura nombre
    const lastname = $('#ln').val();//captura apellido
    const direccion = $('#dire').val();//captura la direccion
    const direcciontho = $('#dire2').val();//captura direccion2
    const pais = $("#pais option:selected").html();//captura pais
    const correo = $('#corr').val();//captura correo
    const contra = $('#con').val();//captura contraseña

    let personaDb = JSON.parse(localStorage.getItem('persona'));
    if (!personaDb) {
        personaDb = [];
    }

    const au = {
        id: personaDb.length + 1,
        name: name,
        lastname: lastname,
        dire: direccion,
        diredos: direcciontho,
        pai: pais,
        correo: correo,
        contraseña: contra
    }
    let val = "F";
    for (i = 0; i < personaDb.length; i++) {//valida el correo
        if (correo == personaDb[i].correo) {
            val = "V";
            break;
        } else {
            val = "F";
        }
    }
    if (val == "F") {
        personaDb.push(au);
        localStorage.setItem('persona', JSON.stringify(personaDb));
        sessionStorage.clear();
        sessionStorage.setItem('Usuario', JSON.stringify(au));
        // location. reload();
        window.location.href = 'C:/Users/ExtremeSc/Desktop/Tarea isw512/Proyecto1/Admin/index.html';
    } else {
        alert("Este correo ya esta registrado");
    }

}