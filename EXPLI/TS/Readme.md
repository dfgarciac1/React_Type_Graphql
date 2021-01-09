# Primeros Pasos TypeScript
 ```bash

 ```
## Tipos de datos 

## Boolean 
  ```bash
 let isDone: boolean = false; => TS
-----------------
 "use strict";
let isDone = false; => JS
 ```
 Como se puede notar para TS es muy importante definir de que tipo es la variable para despues decirle el valor de esta 

## Number 
 ```bash
 TS
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
----------
JS
"use strict";
// @target: ES2020
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let big = 100n;
 ```
 Pasa lo comentando anteriormente tambien con Number 

 ## String 

 ```bash
 TS
 let color: string = "blue";
 console.log(color) //=> El valor que saliera fuera blue ya que se ejecutando en su bloque de llamada a cambio si .
 color = 'red';
 console.log(color )//=> Daria el valor de red 

 --------
 JS
"use strict";
let color = "blue";
// prettier-ignore
color = 'red';
 ```
Algo interesante es que se usa comilla doble (" ") cuando se usa el tipo String  pero tambien TS me permite usa comilla simple (' ')

 ```bash
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
 ```
Para explicar esto en palabras simples  lo que estoy permitiendo es que  pueda concatentar una variable con ${} algo tambien interesante es que el bloque de let sentence se cierra hasta donde esta encuentre el ;

## Array
 ```bash
 TS
 let list: number[] = [1, 2, 3];

 JS
 "use strict";
let list = [1, 2, 3];
 ```
 Cómo se puede notar los array toca decir de que tipo son y number[]  

 ## Otra manera 
  ```bash
 TS
 Lo que estoy declarando ente < > es de que tipo tiene que ser el arreglo donde pudiera poner String 
let list: Array<number> = [1, 2, 3];

 JS
 "use strict";
let list = [1, 2, 3];
 ```

 ## Tuple 
Declarar una tupla 
 ```bash
let usuar_Inf: [string, number];
 ```
 Como se tiene que trabajar 

  ```bash
usuar_Inf=["Carlos",20]; => Es correcto 

usuar_Inf=[20,"Carlos"]; => Es Incorrecto 
 ```
 El orden como se define ta tuple si importa y bastante 


## Acceder a una tupla 

 ```bash
console.log(usuar_Inf[0].substring(1)); => Esta sacaria 
arlos ya que es lo que le estoy pidiendo 

console.log(x[1].substring(1)); => Me sacaria un error al ser este de type number 
 ```

 ## Enum 

 enum sirve para  saber  en que posicion esta una variable 
  ```bash
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
si hago un console.log(c) => El resultado sera 1 ya que este se encuentra en esta posición 
 ```

 ## enum desde la posición 1 

  ```bash
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
si hago un console.log(c) => Este me sacaria las posición de 2 
 ```

## enum pero definiendo las posiciones 

 ```bash
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
 ```