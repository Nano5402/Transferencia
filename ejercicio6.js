let minutos = parseInt(prompt("Ingrese la cantidad de minutos"))
let horas = (minutos -(minutos % 60))/60
let restodeminutos = minutos % 60

alert(minutos + " minutos equivalen a " + horas + " horas y " + restodeminutos + " minutos.");