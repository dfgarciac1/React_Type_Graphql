import { __prod__ } from "./constans";
import { Post } from "./entitys/Post";
import { MikroORM} from "@mikro-orm/core";
import path from "path"
console.log("Directorio", __dirname);
export default {
 migrations:{
 path: path.join(__dirname,'./migrations'),
 pattern: /^[\w-]+\d+\.[tj]s$/,

    },
    entities:[Post],
    dbName:'Mizog',
    type:'postgresql',
    debug: !__prod__ 
}as Parameters <typeof MikroORM.init>[0];