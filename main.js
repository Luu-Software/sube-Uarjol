/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/




boton.addEventListener("click", () => {
  let dist;
  let reg;
  let precio;

  reg = registrada.value;
  dist = distancia.value;
  tarifa.innerText = precio;

  if(reg === "si"){
    if(dist <= 3){
      precio = 715.24
    }
    else if(dist <= 6){
      precio = 797.74
    }
    else if(dist <= 12){
      precio = 855.97
    }
    else if(dist > 12){
      precio = 917.24
    }
  };
  if(reg === "no"){
    if(dist <= 3){
      precio = 1137.23
    }
    else if(dist <= 6){
      precio = 1263.64
    }
    else if(dist <= 12){
      precio = 1360.99
    }
    else if(dist > 12){
      precio = 1458.41
    }
  };
});


