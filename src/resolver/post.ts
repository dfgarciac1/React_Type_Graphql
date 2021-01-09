import { Post } from "../entitys/Post"
import { Mycontext } from "../types"
import {Resolver ,Query, Ctx} from "type-graphql"
@Resolver()
export class PostResolver{
 @Query(()=>[Post])
 posts(
@Ctx() {em}:Mycontext
 ){
     return em.find(Post,{}) 
 }
}