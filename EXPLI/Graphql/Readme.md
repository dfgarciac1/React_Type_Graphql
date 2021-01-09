# Primeros Pasos 
Graphql
 ```bash

 ```

 ```bash
Primeramente que todo que es GrapQL  es un lenguaje de consulta diseñado para las API este fue desarrollado por 
Facebook 
 ```
 ## Como funciona 
  ```bash
Se definen types  y en estos se llenan los datos 
si ha tenido experencia en Json sabra que es muy parecido .
 ```

## Ejemplo 1 

 ```bash
 En este caso le estoy diciendo que es de tipo consulta o Query
type Query {
  yo : Usuario 
}
 Aca estoy definiendo lo que el usuario debe tener 
type User {
  id : ID => Tiene un id de tipo ID el cual este ultimo es lo que se conoce como un decorativo 
  nombre : String 
}
 ```