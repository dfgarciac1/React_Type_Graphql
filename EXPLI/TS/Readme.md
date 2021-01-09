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