import { TypeInfo } from "graphql";
import { User } from "../entitys/User";
import { Mycontext } from "src/types";
import {Resolver ,Query, Ctx, Arg, Int, Mutation, InputType, Field, ObjectType} from "type-graphql"
import argon2 from "argon2"
@InputType()
class UsernamePasswordInput{
 @Field() 
 username:string
 @Field()
 password:string
}

@ObjectType()
class FieldError{
@Field()
field:string;
@Field()
message:string;
}

@ObjectType()
class userResponse{
    @Field(()=>[FieldError],{nullable:true})
    errors?: FieldError[];
    
    @Field(()=>User,{nullable:true})
    user?:User;
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


 @Query(()=>[User])
 UserFind(
@Ctx() {em}:Mycontext
 ){
     return em.find(User,{}) 
 }

 @Mutation(()=>userResponse)
         async login(
             @Arg("options") options: UsernamePasswordInput ,
             @Ctx(){em}:Mycontext
         ) : Promise<userResponse>{
   const user = await em.findOne(User,{username:options.username}); 
             if(!user ){
                 return{
                     errors: [
                         {
                            field:"username",
                         message:'Ese usuario no existe'
                        },
                    ],
                 };
             }
        const valid = await  argon2.verify(user.password,options.password)
         if(!valid){
            return{
                errors: [
                    {
                       field:"password",
                    message:'Contraseña incorrecta '
                   },
               ],
            };
         }
             return {user};
         }
    }