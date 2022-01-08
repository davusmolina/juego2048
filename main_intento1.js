
var tablero=document.getElementById("tablero");
var boton=document.getElementById("iniciar");
//window.onload= 
function miFuncion(){
  document.getElementById("iniciar").onclick=miFuncion;
  var node = document.getElementById("d");
  var nodoTd = node.parentNode;
  var nodoTr = nodoTd.parentNode;
  var nodosEnTr = nodoTr.getElementsByTagName("td");
  nodosEnTr[0].textContent = generarAleatorio(2, 8);
  nodosEnTr[1].textContent = generarAleatorio(2, 8);
}

function generarAleatorio(min, max)
{
    var aleatorio=Math.round(Math.random()*(max-min)+min);
    return aleatorio;
}


//function myFunction()
//{
 // var node=document.getElementById("d");
 // console.log(node);
 //@return {type} description var nodoTd=node.parentNode;
 // var nodoTr=nodoTd.parentNode;
 // var nodosEnTr=nodoTr.getElementsByTagName("td");
 // nodosEnTr[0].innerHTML=generarAleatorio(2,8);
 // nodosEnTr[1].innerHTML=generarAleatorio(2,8);
  //var textoEn1=nodosEnTr[0].textContent;
  //console.log(textoEn1);
  //document.write(textoEn1)
//}
function sumarTextContent(node)
{
  
    var nodoTd = node.parentNode;
    var nodoTr = nodoTd.parentNode;
    var nodosEnTr = nodoTr.getElementsByTagName("td");
    nodosEnTr[2].textContent = parseInt(nodosEnTr[0].textContent) +parseInt(nodosEnTr[1].textContent);
}
var x = document.getElementsByClassName("editar");
//console.log(x[24]);
function myFunction()
{
  x[0].textContent=generarAleatorio(2,8);
  x[22].textContent=generarAleatorio(2,8);
} 
function sumarTextContents(){
  x[3].textContent =parseInt(x[0].textContent) + parseInt (x[22].textContent);
}
boton.addEventListener("click", myFunction) ;
x[3].addEventListener("click", sumarTextContents);