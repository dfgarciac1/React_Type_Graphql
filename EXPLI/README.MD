# Bienvenido a la explicación de mi proceso de aprendizaje: 

## mikro 
Es TypeScript ORM para node.js la cual esta basado en Data Mapper,Unit of work y identity map patterns 

## ¿Qué es  Data Mapper,Unit of work y identity map patterns ?

Surgio del libro de  Martin Fowler's llamado Patterns of Enterprise Application Architecture el cual esto son patrones orientados a objetos comenzemos uno a uno :

## => 1 Data Mapper 
Esta nos habla de que la interfaz de un objeto para que incluya este patron tiene que incluir funciones como  Crear,Leer,Actualizar,borrar  por lo tanto representa la entrada de datos a una Base de datos 

 ![Data Mapper](https://github.com/dfgarciac1/React_Type_Graphql/blob/main/EXPLI/Mapeado.png)


## 2 




# Partes del codigo 

## Migrations 
Esta parte consiste en la migracion de los datos via cli  lo que me permite cambiar la información de transferencias entre bases de datos 
```bash
npx mikro-orm migration:create
 ```
Con este comando comienzo  la creación de las migraciones la cual tiene que ser previamente preparado de esta manera 

migrations:{
 path: path.join(__dirname,'./migrations'),
 pattern: /^[\w-]+\d+\.[tj]s$/,

    },
