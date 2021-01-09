 import { MikroORM} from "@mikro-orm/core";
 import 'reflect-metadata';
import {__prod__} from "./constans";
//import {Post } from "./entitys/Post";
import microConfig from "./mikro-orm.config"
import express from "express"
import {ApolloServer} from "apollo-server-express"
import {buildSchema} from "type-graphql"
import { HelloResolver } from "./resolver/hello";
import {PostResolver} from "./resolver/post"
const main= async()  =>{
const orm  =await MikroORM.init(microConfig);
await orm.getMigrator().up();
// const post =orm.em.create(Post,{title:"Hola primer post"});
// await orm.em.persistAndFlush(post);
// const posts = await orm.em.find(Post,{});
// console.log(posts);
const app = express();

const apolloServer = new ApolloServer({
schema: await buildSchema({
    resolvers:[HelloResolver,PostResolver],
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
