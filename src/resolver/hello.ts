import { Mycontext } from "../types"
import {PersonaObject  } from "../entitys/Persona"
import {Resolver ,Query,Ctx} from "type-graphql"
@Resolver()
export class HelloResolver{
 @Query(()=>[PersonaObject])
 hello(
     @Ctx() {em}:Mycontext){
    return em.find(PersonaObject,{}) 
 }
}