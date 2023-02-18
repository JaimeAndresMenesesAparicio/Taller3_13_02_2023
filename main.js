// 7.	Dados dos números enteros positivos N y D, se dice que D es un divisor
//  de N si el resto de dividir N entre D es 0. Se dice que un número N es 
//  perfecto si la suma de sus divisores (excluido el propio N) es N.
//  Por ejemplo 28 es perfecto, pues sus divisores (excluido elv28) son:
//  1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28. Hacer un organigrama 
//  que dado un número N nos diga si es o no perfecto.
let suma=0;
let N = Number(prompt(`Ingrese el primer número:`));
let D = Number(prompt(`Ingrese el segundo número:`));
if(N%D == 0){
    console.log(`El ${D} es divisor de ${N}.`);    
}
else{
    console.log(`El ${D} no es divisor de ${N}.`);    
}
for(let i=1; i<N; i++){
    if(N%i==0){
        suma+=i;
    }
}
if(suma == N){
    console.log(`El número es perfecto`);    
}
else{
    console.log(`El número es no perfecto`);    
}