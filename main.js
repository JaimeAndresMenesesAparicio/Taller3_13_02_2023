let numeros, mayor=0; 
do{
    numeros = Number(prompt(`Tener en cuenta que si ingresa el 0, termina el programa
Ingrese un número:`));
    console.log(numeros);
    if(numeros > mayor ){
    mayor=numeros;  
    }
}
while(numeros != 0 ){
}
console.log(`El número mayor de los números ingresados es: ${mayor}`)