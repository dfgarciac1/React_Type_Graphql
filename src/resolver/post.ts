import { Post } from "../entitys/Post"
import { Mycontext } from "../types"
import {Resolver ,Query, Ctx, Arg, Int} from "type-graphql"
@Resolver()
export class PostResolver{
 @Query(()=>[Post])
 posts(
@Ctx() {em}:Mycontext
 ){
     return em.find(Post,{}) 
 }

 @Query(()=>Post,{nullable:true})
 post(
@Arg("id",() =>Int)  id:number,
@Ctx() {em}:Mycontext
 ): Promise<Post | null> {
     return em.findOne(Post,{id }) ;
 }
}