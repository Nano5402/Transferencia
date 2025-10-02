let producto = parseInt(prompt("Ingrese el valor del producto"))
let descuento = parseFloat(prompt("Ingrese el valor del descuento:"))
let total = (producto * descuento / 100);

alert ("El descuento total de su producto sería: " + "$" + total)