import {Resolver ,Query} from "type-graphql"
@Resolver()
export class HelloResolver{
 @Query(()=>String)
 hello(){
     return "Hola mundo que pasa"
 }
}