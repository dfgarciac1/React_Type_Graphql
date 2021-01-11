import { __prod__ } from "./constans";
import { Post } from "./entitys/Post";
import {persona} from "./entitys/Persona";
import { MikroORM} from "@mikro-orm/core";
import path from "path"
import { User } from "./entitys/User";
console.log("Directorio", __dirname);
export default {
 migrations:{
 path: path.join(__dirname,'./migrations'),
 pattern: /^[\w-]+\d+\.[tj]s$/,

    },
    entities:[Post,User],
    dbName:'postgres',
    user:"davidpuerta",
    type:'postgresql',
    debug: process.env.NODE_ENV === "development",
}as Parameters <typeof MikroORM.init>[0];