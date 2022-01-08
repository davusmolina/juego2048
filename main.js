var botonReinicio=document.getElementById("reiniciar");
var x = document.getElementsByClassName("editar");
var bArriba=document.getElementById("arriba");
var bAbajo=document.getElementById ("abajo");
var bIzquierda=document.getElementById("izquierda");
var bDerecha=document.getElementById("derecha");
var marcadores=document.getElementsByClassName("marcadores");
var numClicks =0;
var lleno=false;

const personMejorPuntaje = {
  name: ['David', 'Molina'],
  greeting: function() {
    alert("Tienes El mejor Puntaje");
  }
};

function generarAleatorio(min, max)
{
  var aleatorio = Math.round(Math.random() * (max - min) + min);
  return aleatorio;
}

function generarAleatorioPar()
{
  var aleatorio = generarAleatorio(1, 4);
  if (aleatorio==1)
    {
      aleatorio=2;
      return aleatorio;
    }
  else if (aleatorio==2)
    {
      aleatorio=4;
      return aleatorio;
    }
  else if (aleatorio==3)
    {
      aleatorio=8;
      return aleatorio;
    }
  else if (aleatorio==4)
    {
        aleatorio=16;
        return aleatorio;
    }
}

function generarNumeros()
{
  var i = generarAleatorio(0, 24);
  var j = generarAleatorio(0, 24);
  while (x[i].textContent!="")
  {
    i=generarAleatorio(0, 24);
    if (lleno==true)
    {
        break;
    }
  }
  while (x[j].textContent!="")
  {
    j=generarAleatorio(0, 24);
    if (lleno==true)
    {
        break;
    }
  }
  if (x[i].textContent=="")
   {
     var numeroGenerado=generarAleatorioPar(2, 16);
     x[i].textContent=numeroGenerado;
   }
  if (x[j].textContent=="")
   {
     var numeroGenerado=generarAleatorioPar(2, 16);
     x[j].textContent= numeroGenerado;
   }

}

function range(x, min, max)
{
  return x>=min && x<=max;
}

function reiniciar()
{
  // for(var i=0;i<25;i++)
  // {
  //   x[i].textContent ="";
  // }
  location.reload();
}
function llevarCuenta()
{
  var puntaje= 0;
  for(var i=0;i<25;i++)
  {
    if(puntaje < parseInt(x[i].textContent))
    {
      puntaje= parseInt(x[i].textContent);
    }
  }
  marcadores[0].textContent="Puntaje: " + puntaje;
}
function clicks()
{
  numClicks++;
  return numClicks;
}

function gameOver()
{
  var numVacios=24;

  for(var i=0;i<25;i++)
  {
    if(x[i].textContent!="")
    {
      numVacios--;
      if (numVacios==0)
      {
        lleno=true;
      }
    }
  }
  if (lleno==true)
  {
    for(var i=0;i<25;i++)
    {
      x[i].textContent ="";
    }
    x[12].textContent="Game over";
  }
}
function sumarHaciaArriba()
{
  function subir()
  {
    for (var i=5; i<25 ;i++)
    {
      if (x[i-5].textContent=="")
      {
        x[i-5].textContent=x[i].textContent;
        x[i].textContent="";
      }
    }
  }
  function sumar()
  {
    for (var i=0; i<20 ;i++)
    {
       if (x[i].textContent != "" && x[i].textContent == x[i + 5].textContent )
        {
          x[i].textContent = parseInt(x[i + 5].textContent) + parseInt(x[i].textContent);
          x[i + 5].textContent = "";
        }
    }
  }
  subir();
  sumar();
  subir();
  sumar();
  subir();
  sumar();
  llevarCuenta();
  marcadores[1].textContent= "#Movimi:  " + clicks();
  setTimeout(gameOver, 1000);
  setTimeout(generarNumeros, 400);
}

function sumarHaciaAbajo()
{
  function bajar()
  {
    for (var i = 0; i < 20; i++)
    {
      if (x[i+5].textContent=="")
      {
        x[i+5].textContent=x[i].textContent;
        x[i].textContent="";
      }
    }
  }
  function sumar()
  {
  for (var i = 5; i < 25; i++)
    {
     if (x[i].textContent != "" && x[i].textContent == x[i - 5].textContent )
      {
        x[i].textContent = parseInt(x[i - 5].textContent) + parseInt(x[i].textContent);
        x[i - 5].textContent = "";
      }
    }
  }
  bajar();
  sumar();
  bajar();
  sumar();
  bajar();
  sumar();
  bajar();
  sumar();
  llevarCuenta();
  marcadores[1].textContent= "#Movimi:  " + clicks();
  setTimeout(gameOver, 1000);
  setTimeout(generarNumeros, 400);
}

function sumarHaciaDerecha()
{
  function mover()
  {
    for (var i = 0; i < 25; i++)
    {
    if (range(i, 0, 3) && x[i+1].textContent=="")
      {
          x[i+1].textContent=x[i].textContent;
          x[i].textContent="";
      }
    if (range(i, 5, 8) && x[i+1].textContent=="")
        {
          x[i+1].textContent=x[i].textContent;
          x[i].textContent="";
        }
    if (range(i, 10, 13) && x[i+1].textContent=="")
        {
          x[i+1].textContent=x[i].textContent;
          x[i].textContent="";
        }
    if (range(i, 15, 18) && x[i+1].textContent=="")
        {
          x[i+1].textContent=x[i].textContent;
          x[i].textContent="";
        }
    if (range(i, 20, 23) && x[i+1].textContent=="")
        {
          x[i+1].textContent=x[i].textContent;
          x[i].textContent="";
        }
    }
  }

  function sumar()
  {
    for (var i = 1; i < 25; i++)
    {
      if (x[i].textContent == x[i - 1].textContent && x[i].textContent != "" && x[i - 1].textContent != "")
        {
          x[i].textContent = parseInt(x[i-1].textContent) + parseInt(x[i].textContent);
          x[i - 1].textContent = "";
        }
    }
  }
mover();
sumar();
mover();
sumar();
mover();
sumar();
mover();
sumar();
llevarCuenta();
marcadores[1].textContent= "#Movimi:  " + clicks();
setTimeout(gameOver, 1000);
setTimeout(generarNumeros, 400);
}

function sumarHaciaIzquierda()
{
  function mover()
  {
    for (var i = 1; i < 25; i++)
    {
      if (range(i, 1, 4) && x[i-1].textContent=="")
        {
            x[i-1].textContent=x[i].textContent;
            x[i].textContent="";
        }
      if (range(i, 6, 9) && x[i-1].textContent=="")
        {
            x[i-1].textContent=x[i].textContent;
            x[i].textContent="";
        }
      if (range(i, 11, 14) && x[i-1].textContent=="")
        {
            x[i-1].textContent=x[i].textContent;
            x[i].textContent="";
        }
      if (range(i, 16, 19) && x[i-1].textContent=="")
        {
            x[i-1].textContent=x[i].textContent;
            x[i].textContent="";
        }
      if (range(i, 21, 24) && x[i-1].textContent=="")
        {
            x[i-1].textContent=x[i].textContent;
            x[i].textContent="";
        }
      }
  }
  function sumar()
  {
    for (var i = 0; i < 24; i++)
      {
      if (x[i].textContent == x[i + 1].textContent && x[i].textContent != "")
        {
          x[i].textContent = parseInt(x[i+1].textContent) + parseInt(x[i].textContent);
          x[i + 1].textContent = "";
        }
      }
  }
  mover();
  sumar();
  mover();
  sumar();
  mover();
  sumar();
  mover();
  sumar();
  llevarCuenta();
  marcadores[1].textContent= "#Movimi:  " + clicks();
  setTimeout(gameOver, 1000);
  setTimeout(generarNumeros, 400);
}


botonReinicio.addEventListener("click", reiniciar) ;
bAbajo.addEventListener("click", sumarHaciaAbajo);
bDerecha.addEventListener("click", sumarHaciaDerecha);
bArriba.addEventListener("click", sumarHaciaArriba);
bIzquierda.addEventListener("click", sumarHaciaIzquierda);
