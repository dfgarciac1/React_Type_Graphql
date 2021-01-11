 import { MikroORM} from "@mikro-orm/core";
 import 'reflect-metadata';
import {__prod__} from "./constans";
import {persona } from "./entitys/Persona";
import microConfig from "./mikro-orm.config"
import express from "express"
import {ApolloServer} from "apollo-server-express"
import {buildSchema} from "type-graphql"
import { HelloResolver } from "./resolver/hello";
import {PostResolver} from "./resolver/post"
import { UserResolver } from "./resolver/user";
const main= async()  =>{
const orm  =await MikroORM.init(microConfig);
await orm.getMigrator().up();
 // const Persona=orm.em.create(persona,{Nombre:"David",Genero:"Camion"});
//await orm.em.persistAndFlush(Persona);


const app = express();

const apolloServer = new ApolloServer({
schema: await buildSchema({
    resolvers:[UserResolver,PostResolver],
    validate:false
}),
context:() => ({em: orm.em})
});

apolloServer.applyMiddleware({app});


app.listen(4000,()=>{
    console.log("Servidor se inicio en el puerto :4000")
})
};



main().catch((err) =>{
console.log(err);
});
