/////////////////////////////////////////
/////////////// Autenticacion////////////
/////////////////////////////////////////


url = "https://realtime.ably.io/event-stream?";
version = "1.2"
username = "VRDsGQ.B_CYIQ";
password = "dPUOfDfiuRQrRSX9wt1fcYc9v-AKBdGQa2jTP60_D5g";
topic_raiz = "ok";
topic_conexion = "/conexion";
topic_datos_lamparas = "/datos_lamparas";

    // // Mensajes
    mensaje_inicial = "Desconectado"
    clientId=  " WEB FAM-MERCADO--->> " + Math.floor((Math.random() * 1000000) + 1);

var ably = new Ably.Realtime(username+':'+password);

   var channel = ably.channels.get(topic_raiz+topic_conexion);
   channel.publish(clientId, mensaje_inicial);                    // publicar siempre que inice el servidor web con mensaje de inicio

  //recibir mensajes de los topicos suscritos de conexion y desconexion

  var conexion = url+'channels='+topic_raiz+'&v='+version+'&key='+username+':'+password;
  var eventSource = new EventSource(conexion);

  eventSource.onmessage = function(event) {
    var message = JSON.parse(event.data);
  
    var topic = message.channel;
  // Decodificar mensaje
  var decodedString = atob(message.data);
  console.log('Topic: ' + message.channel + '  Mensaje: ' + decodedString ); 
  
  if (topic == topic_raiz){
    var splitted = decodedString.toString().split(",");
    var conex = splitted[0];

    if(conex == "Conectado" || conex == "Desconectado"){
      document.getElementById("display_conexion").innerHTML = conex;
    }
  }
  };
  //////////////////////////////////////////////



  var conexion_2 = url+'channels='+topic_raiz+topic_datos_lamparas+'&v='+version+'&key='+username+':'+password;
  var eventSource = new EventSource(conexion_2);

  eventSource.onmessage = function(event) {
    var message = JSON.parse(event.data);
  
    var topic = message.channel;
  // Decodificar mensaje
  var decodedString = atob(message.data);
  console.log('Topic: ' + message.channel + '  Mensaje: ' + decodedString ); 
  
  if (topic == topic_raiz+topic_datos_lamparas){
    var splitted = decodedString.toString().split(",");
    var switch1 = splitted[0];
    var switch2 = splitted[1];
    var switch3 = splitted[2];
    var switch4 = splitted[3];
    var switch5 = splitted[4];
    var switch6 = splitted[5];
    var switch7 = splitted[6];
    var switch8 = splitted[7];
    var switch9 = splitted[8];
    var switch10 = splitted[9];


    if(switch1 == "1"){
      $("#display_sw1").prop('checked', true);
    }else{
      $("#display_sw1").prop('checked',"");
    }
    if(switch2 == "1" ){
      $("#display_sw2").prop('checked', true);
    }else{
      $("#display_sw2").prop('checked',"" );
    }
    if(switch3 == "1" ){
      $("#display_sw3").prop('checked', true);
    }else{
      $("#display_sw3").prop('checked',"" );
    }
    if(switch4 == "1" ){
      $("#display_sw4").prop('checked', true);
    }else{
      $("#display_sw4").prop('checked',"" );
    }
    if(switch5 == "1" ){
      $("#display_sw5").prop('checked', true);
    }else{
      $("#display_sw5").prop('checked',"" );
    }
    if(switch6 == "1" ){
      $("#display_sw6").prop('checked', true);
    }else{
      $("#display_sw6").prop('checked',"" );
    }
    if(switch7 == "1" ){
      $("#display_sw7").prop('checked', true);
    }else{
      $("#display_sw7").prop('checked',"" );
    }
    if(switch8 == "1" ){
      $("#display_sw8").prop('checked', true);
    }else{
      $("#display_sw8").prop('checked',"" );
    }
    if(switch9 == "1" ){
      $("#display_sw9").prop('checked', true);
    }else{
      $("#display_sw9").prop('checked',"" );
    }
    if(switch10 == "1" ){
      $("#display_sw10").prop('checked', true);
    }else{
      $("#display_sw10").prop('checked',"" );
    }
  }
  };

  ////////////////////////////////////////////////////////

  function sw1_change(){

    var channel = ably.channels.get(topic_raiz+"/actions/sw1");
     
    if ($('#display_sw1').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw1 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw1 off');
    }
  }

  function sw2_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw2");
     
    if ($('#display_sw2').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw2 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw2 off');
    }
  }

  function sw3_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw3");
     
    if ($('#display_sw3').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw3 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw3 off');
    }
  }

  function sw4_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw4");
     
    if ($('#display_sw4').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw4 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw4 off');
    }
  }

  function sw5_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw5");
     
    if ($('#display_sw5').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw5 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw5 off');
    }
  }

  function sw6_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw6");
     
    if ($('#display_sw6').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw6 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw6 off');
    }
  }

  function sw7_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw7");
     
    if ($('#display_sw7').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw7 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw7 off');
    }
  }

  function sw8_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw8");
     
    if ($('#display_sw8').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw8 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw8 off');
    }
  }

  function sw9_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw9");
     
    if ($('#display_sw9').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw9 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw9 off');
    }
  }

  function sw10_change(){
    var channel = ably.channels.get(topic_raiz+"/actions/sw10");
     
    if ($('#display_sw10').is(":checked")){
      channel.publish(clientId, "1"); 
      console.log('Mensaje sw10 on');
    }else{
      channel.publish(clientId, "0"); 
      console.log('Mensaje sw10 off');
    }
  }
