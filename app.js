
function productos(){
    
// \n = salto de linea
    let precioTotal = 0;
    let precio = 0;
    let producto;
    let compra = parseFloat(prompt("seleccione su compra: \n1.gaseosa \n2.cerveza \n3.galletas \n4 .papas fritas \n0.salir y ver  precio total   "));
     
    console.log(compra);
   
    while(compra != 0 ){
        

        if(compra == 1){
            alert("el precio es : 2.50 dolares")
            precio = 2.5;
            document.write("<h2>su pedido fue gaseosa</h2> ")
        }else if(compra == 2){
            alert("el precio es : 5 dolares")
            precio = 5;
            document.write("<h2>su pedido fue una cerveza</h2> ")
        }else if(compra == 3){
            alert("el precio es: 2 dolares")
            precio = 2;
            document.write("<h2>su pedido fue galletas</h2> ")
        }else if(compra == 4){
            alert("el precio es: 8.5 dolares")
            precio = 8.5;
            document.write("<h2>su pedido fue papas fritas</h2> ")
        }else{
            alert("selecciones correctamente el produco")
        }

        compra = parseFloat(prompt("seleccione su compra: \n1.gaseosa \n2.cerveza \n3.galletas \n4 .papas fritas \n0.salir y ver  precio total   "));
        precioTotal = precioTotal + precio;
        
    }
    alert("el precio total de los productos adquiridos es : " + " $ " + precioTotal );
}

productos();

