import { Post } from "../entitys/Post"
import { Mycontext } from "../types"
import {Resolver ,Query, Ctx, Arg, Int, Mutation} from "type-graphql"
import { title } from "process";
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

 @Mutation(()=>Post)
 async Createpost(
@Arg("Titulo")  title:String,
@Ctx() {em}:Mycontext
 ): Promise<Post | null> {
    const post= em.create(Post,{title})
     await em.persistAndFlush(post)
     return post;
 
}
}