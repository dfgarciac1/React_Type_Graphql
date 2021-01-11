import { TypeInfo } from "graphql";
import { User } from "../entitys/User";
import { Mycontext } from "src/types";
import {Resolver ,Query, Ctx, Arg, Int, Mutation, InputType, Field} from "type-graphql"
import argon2 from "argon2"
@InputType()
class UsernamePasswordInput{
 @Field() 
 username:string
 @Field()
 password:string
}



@Resolver()
export class UserResolver{
@Mutation(()=>User)
         async register(
             @Arg("options") options: UsernamePasswordInput ,
             @Ctx(){em}:Mycontext
         ){
        const hashedPassword = await  argon2.hash(options.password)
        const user = em.create(User,{username:options.username,password:hashedPassword})
        await em.persistAndFlush(user)
             return user;
         }
    }