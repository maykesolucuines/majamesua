const contenido = document.querySelector('.contenido')
var mensaje;

 /* Evento para empezar pulsado el boton */
    
function start() {
   reconocimiento.start();
   document.getElementById("btn").style.display = "none"   

}

/* Primero creamos los objetos para poder grabar nuestra voz con el microfono */
const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;

const reconocimiento = new reconocimientoVoz()
/* metodo que se ejecuta al empezar a grabar */
reconocimiento.onstart = ()=>{
contenido.innerHTML = 'Escucho...'
}

/* Metodo que se ejecuta al terminar la grabación */
reconocimiento.onresult = event =>{
    let mensaje = event.results[0][0].transcript
    contenido.innerHTML = mensaje
    leerTextoCondicionado(mensaje)
      
    setTimeout(() => { 
        start();        
        },1000); 
}

reconocimiento.onerror = function(event) {
    //contenido.innerHTML  = 'Error: ' + event.error;
    contenido.innerHTML = 'No escucho';
    setTimeout(() => { 
        start();        
        },1500); 
}

 /*Función que condiciona la respuesta dependiendo de el contenido de la grabación */
const leerTextoCondicionado = (mensaje)=>{
    const voz = new SpeechSynthesisUtterance()
    if(mensaje.includes('lámpara 1 prender') || mensaje.includes('lámpara 1 encender') || mensaje.includes('encender lámpara uno') || mensaje.includes('encender lámpara 1')){
        voz.text = 'OK'
        var channel = ably.channels.get(topic_raiz+"/actions/sw1");
        channel.publish(clientId, "1"); 
        console.log('Mensaje sw1 on');
    }else{
        //voz.text = mensaje
    }

    if(mensaje.includes('lámpara 1 Apagar') || mensaje.includes('lámpara 1 apagar') || mensaje.includes('Apagar lámpara uno') || mensaje.includes('Apagar lámpara 1')){
        voz.text = 'OK'
        var channel = ably.channels.get(topic_raiz+"/actions/sw1");
        channel.publish(clientId, "0"); 
        console.log('Mensaje sw1 off');
    }else{
        //voz.text = mensaje
    }
///////////////////////////////////
if(mensaje.includes('lámpara 2 prender') || mensaje.includes('lámpara 2 encender') || mensaje.includes('encender lámpara dos')|| mensaje.includes('encender lámpara 2')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw2");
    channel.publish(clientId, "1"); 
    console.log('Mensaje sw2 on');
}else{
    //voz.text = mensaje
}

if(mensaje.includes('lámpara 2 Apagar') || mensaje.includes('lámpara 2 apagar') || mensaje.includes('Apagar lámpara dos')|| mensaje.includes('Apagar lámpara 2')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw2");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw2 off');
}else{
    //voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 3 prender') || mensaje.includes('lámpara 3 encender') || mensaje.includes('encender lámpara tres')|| mensaje.includes('encender lámpara 3')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw3");
    channel.publish(clientId, "1"); 
    console.log('Mensaje sw3 on');
}else{
    //voz.text = mensaje
}

if(mensaje.includes('lámpara 3 Apagar') || mensaje.includes('lámpara 3 apagar') || mensaje.includes('Apagar lámpara tres')|| mensaje.includes('Apagar lámpara 3')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw3");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw3 off');
}else{
    //voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 4 prender') || mensaje.includes('lámpara 4 encender') || mensaje.includes('encender lámpara cuatro')|| mensaje.includes('encender lámpara 4')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw4");
    channel.publish(clientId, "1"); 
    console.log('Mensaje sw4 on');
}else{
    //voz.text = mensaje
}

if(mensaje.includes('lámpara 4 Apagar') || mensaje.includes('lámpara 4 a pagar') || mensaje.includes('Apagar lámpara cuatro')|| mensaje.includes('Apagar lámpara 4')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw4");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw4 off');
}else{
    //voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 5 prender') || mensaje.includes('lámpara 5 encender') || mensaje.includes('encender lámpara cinco')|| mensaje.includes('encender lámpara 5')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw5");
    channel.publish(clientId, "1"); 
    console.log('Mensaje sw5 on');
}else{
    //voz.text = mensaje
}
if(mensaje.includes('lámpara 5 Apagar') || mensaje.includes('lámpara 5 apagar') || mensaje.includes('Apagar lámpara cinco')|| mensaje.includes('Apagar lámpara 5')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw5");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw5 off');
}else{
    //voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 6 prender') || mensaje.includes('lámpara 6 encender') || mensaje.includes('encender lámpara seis') || mensaje.includes('encender lámpara 6')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw6");
    channel.publish(clientId, "1"); 
    console.log('Mensaje sw6 on');
}else{
    //voz.text = mensaje
}

if(mensaje.includes('lámpara 6 Apagar') || mensaje.includes('lámpara 6 apagar') || mensaje.includes('Apagar lámpara seis') || mensaje.includes('Apagar lámpara 6')){
    voz.text = 'OK'
    var channel = ably.channels.get(topic_raiz+"/actions/sw6");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw6 off');
}else{
    //voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 7 prender') || mensaje.includes('lámpara 7 encender') || mensaje.includes('encender lámpara siete')|| mensaje.includes('encender lámpara 7')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw7");
channel.publish(clientId, "1"); 
console.log('Mensaje sw2 on');
}else{
//voz.text = mensaje
}

if(mensaje.includes('lámpara 7 Apagar') || mensaje.includes('lámpara 7 apagar') || mensaje.includes('Apagar lámpara siete')|| mensaje.includes('Apagar lámpara 7')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw7");
channel.publish(clientId, "0"); 
console.log('Mensaje sw7 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 8 prender') || mensaje.includes('lámpara 8 encender') || mensaje.includes('encender lámpara ocho')|| mensaje.includes('encender lámpara 8')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw8");
channel.publish(clientId, "1"); 
console.log('Mensaje sw8 on');
}else{
//voz.text = mensaje
}

if(mensaje.includes('lámpara 8 Apagar') || mensaje.includes('lámpara 8 apagar') || mensaje.includes('Apagar lámpara ocho')|| mensaje.includes('Apagar lámpara 8')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw8");
channel.publish(clientId, "0"); 
console.log('Mensaje sw3 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 9 prender') || mensaje.includes('lámpara 9 encender') || mensaje.includes('encender lámpara nueve')|| mensaje.includes('encender lámpara 9')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw9");
channel.publish(clientId, "1"); 
console.log('Mensaje sw9 on');
}else{
//voz.text = mensaje
}

if(mensaje.includes('lámpara 9 Apagar') || mensaje.includes('lámpara 9 apagar') || mensaje.includes('Apagar lámpara nueve')|| mensaje.includes('Apagar lámpara 9')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw9");
channel.publish(clientId, "0"); 
console.log('Mensaje sw9 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 10 prender') || mensaje.includes('lámpara 10 encender') || mensaje.includes('encender lámpara diez')|| mensaje.includes('encender lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "1"); 
console.log('Mensaje sw10 on');
}else{
//voz.text = mensaje
}

if(mensaje.includes('lámpara 10 Apagar') || mensaje.includes('lámpara 10 a pagar') || mensaje.includes('Apagar lámpara diez')|| mensaje.includes('Apagar lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "0"); 
console.log('Mensaje sw10 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 10 prender') || mensaje.includes('lámpara 10 encender') || mensaje.includes('encender lámpara diez')|| mensaje.includes('encender lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "1"); 
console.log('Mensaje sw10 on');
}else{
//voz.text = mensaje
}
if(mensaje.includes('lámpara 10 Apagar') || mensaje.includes('lámpara 10 a pagar') || mensaje.includes('Apagar lámpara diez')|| mensaje.includes('Apagar lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "0"); 
console.log('Mensaje sw10 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 10 prender') || mensaje.includes('lámpara 10 encender') || mensaje.includes('encender lámpara diez')|| mensaje.includes('encender lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "1"); 
console.log('Mensaje sw10 on');
}else{
//voz.text = mensaje
}
if(mensaje.includes('lámpara 10 Apagar') || mensaje.includes('lámpara 10 a pagar') || mensaje.includes('Apagar lámpara diez')|| mensaje.includes('Apagar lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "0"); 
console.log('Mensaje sw10 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 10 prender') || mensaje.includes('lámpara 10 encender') || mensaje.includes('encender lámpara diez')|| mensaje.includes('encender lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "1"); 
console.log('Mensaje sw10 on');
}else{
//voz.text = mensaje
}
if(mensaje.includes('lámpara 10 Apagar') || mensaje.includes('lámpara 10 a pagar') || mensaje.includes('Apagar lámpara diez')|| mensaje.includes('Apagar lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "0"); 
console.log('Mensaje sw10 off');
}else{
//voz.text = mensaje
}
///////////////////////////////////
if(mensaje.includes('lámpara 10 prender') || mensaje.includes('lámpara 10 encender') || mensaje.includes('encender lámpara diez')|| mensaje.includes('encender lámpara 10')){
voz.text = 'OK'
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "1"); 
console.log('Mensaje sw10 on');
}else{
//voz.text = mensaje
}
    
/////////// Encender todas las lamparas
if(mensaje.includes('encender todas las lámparas') || mensaje.includes('encender todas las luces')){
voz.text = 'LISTO'
    
setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw1");
channel.publish(clientId, "1"); 
console.log('Mensaje sw1 on');
},1000);

setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw2");
channel.publish(clientId, "1"); 
console.log('Mensaje sw2 on');
},2000);

setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw3");
channel.publish(clientId, "1"); 
console.log('Mensaje sw3 on');
},3000);

setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw4");
channel.publish(clientId, "1"); 
console.log('Mensaje sw4 on');
},4000);

setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw5");
channel.publish(clientId, "1"); 
console.log('Mensaje sw5 on');
},5000);

setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw6");
channel.publish(clientId, "1"); 
console.log('Mensaje sw6 on');
},6000);
    
setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw7");
channel.publish(clientId, "1"); 
console.log('Mensaje sw7 on');
},7000);
    
setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw8");
channel.publish(clientId, "1"); 
console.log('Mensaje sw8 on');
},8000);
    
setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw9");
channel.publish(clientId, "1"); 
console.log('Mensaje sw9 on');
},9000);
    
setTimeout(() => {
var channel = ably.channels.get(topic_raiz+"/actions/sw10");
channel.publish(clientId, "1"); 
console.log('Mensaje sw10 on');
},10000);

}else{
//voz.text = mensaje
}

/////////// Apagar todas las lamparas
if(mensaje.includes('Apagar todas las lámparas')|| mensaje.includes('Apagar todas las luces')){
    voz.text = 'LISTO'
    
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw1");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw1 off');
    },1000);
    
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw2");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw2 off');
    },2000);
    
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw3");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw3 off');
    },3000);
    
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw4");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw4 off');
    },4000);
    
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw5");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw5 off');
    },5000);
    
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw6");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw6 off');
    },6000);
        
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw7");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw7 off');
    },7000);
        
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw8");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw8 off');
    },8000);
        
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw9");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw9 off');
    },9000);
        
    setTimeout(() => {
    var channel = ably.channels.get(topic_raiz+"/actions/sw10");
    channel.publish(clientId, "0"); 
    console.log('Mensaje sw10 off');
    },10000);
    
    }else{
    //voz.text = mensaje
    }
    
/////////// Apagar todas las lamparas
if(mensaje.includes('apaga te')|| mensaje.includes('reiníciate')){
voz.text = 'Adíos'
location.reload();
}else{
 //voz.text = mensaje
}

    voz.rate = 0.5; // velocidad de reproduccion valor menor mas lento
    window.speechSynthesis.speak(voz)
}

