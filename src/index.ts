 import { MikroORM} from "@mikro-orm/core";
import {__prod__} from "./constans";
import {Post } from "./entitys/Post";
import microConfig from "./mikro-orm.config"
const main= async()  =>{

const orm  =await MikroORM.init(microConfig);
const post =orm.em.create(Post,{title:"Hola primer post"});
await orm.em.persistAndFlush(post);
console.log("____SQL1____");
await orm.em.nativeInsert(Post,{title:"Segundo comentario"});

};
main().catch((err) =>{
console.log(err);
});
