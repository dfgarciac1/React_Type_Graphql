# Bienvenido los pasos para la creacion del proyecto  son :

## 1 Iniciar el Json con las  dependencias 
  
  ## npm init -y
  Este comando permite la creacion del Json el cual estaran todas las dependencias y con el -y aceptamos todo por defecto 

## 2 Instalar las dependencias 
```bash
yarn add -D @types/node typescript 
```
Con este comando le estamos añadiendo una dependcias al Json diciendole que permita convertir de Type  => node (.js)

```bash
 yarn add -D nodemon
 ```
 Nodemon sirve para que cuando se haga un cambion en el server este recargue automaticamente 
 * [Nodemon](https://www.npmjs.com/package/nodemon) - Documentación de Nodemon 

```bash
yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
 ```
  * [mikro-orm](https://mikro-orm.io/docs/installation) - Documentación de mikro 
  * [mikro E](https://github.com/dfgarciac1/React_Type_Graphql/tree/main/EXPLI) - Explicacion de mikro
  
  ## Apollo 
```bash
yarn add express apollo-server-express graphql type-graphql
 ```

## TS CONFIG
```bash
npx  tsconfig.json 
```
Con este comando estamos permitiendo  que la configuración de TS especifique los archivoz raiz para poder compilar para mayor informacion 
* [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) - Documentación de TS 

  
  