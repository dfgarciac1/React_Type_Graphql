import { Post } from "src/entitys/Post"
import {Resolver ,Query} from "type-graphql"
@Resolver()
export class HelloResolver{
 @Query(()=>[Post])
 posts(){
     return "Hola mundo 2 y el pan"
 }
}