var claveCorrecta = 12345;
var saldo = 1.500;
var usuario = "kevin15";
var ingreseUsuario = prompt("ingrese usuario");
var ingreseClave = parseInt(prompt("ingrese su clave"));

//var intentos;


    if (ingreseClave === claveCorrecta && usuario === ingreseUsuario) {
        alert("tu saldo actual es " + saldo);
    }else if (ingreseClave != claveCorrecta || ingreseUsuario != usuario){
        alert ("calve o usuario estas incorrectos");
        alert ("intento  N°1");
        ingreseUsuario = prompt("ingrese usuario");
        ingreseClave = parseInt(prompt("ingrese su clave"));
    if (ingreseClave === claveCorrecta && usuario === ingreseUsuario){
        alert("tu saldo actual es " + saldo);
    } else if(ingreseClave != claveCorrecta || ingreseUsuario != usuario){ 
        alert ("calve o usuario estas incorrectos");
        alert ("intento  N°2");
        ingreseUsuario = prompt("ingrese usuario");
        ingreseClave = parseInt(prompt("ingrese su clave"));
        if (ingreseClave === claveCorrecta && usuario === ingreseUsuario){
            alert("tu saldo actual es " + saldo);
        } else if(ingreseClave != claveCorrecta || ingreseUsuario != usuario){ 
            alert ("calve o usuario estas incorrectos");
            alert ("intento  N°3");
            alert("su cuenta ha sido bloqueada termporalmente, comunicarse con un asesor");
    }   
    }
    }