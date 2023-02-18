// 6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.

let numeros, par=0, impar=1; 
do{numeros = Number(prompt(`Tener en cuenta que si ingresa el 0, termina el programa
Ingrese un número:`));
if(numeros == 0){
    console.log("El programa ha terminado.")
}
else{
if(numeros%2 == 0){
    par+=numeros;
    console.log(`La suma de los números pares es: ${par}`);
}
else{
    impar*=numeros;
    console.log(`El producto de los números impares es: ${impar}`);
}
}}
while(numeros != 0 ){
}
