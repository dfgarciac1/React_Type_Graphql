import { Mycontext } from "../types";
import { persona } from "../entitys/Persona";
import argon2 from "argon2";
import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Int,
  Mutation,
  InputType,
  Field,
} from "type-graphql";
@InputType()
class UsernamePasswordInput {
  @Field()
  Nombre: String;
  @Field()
  password: string;
}

@Resolver()
export class HelloResolver {
  @Query(() => [persona])
  persona(@Ctx() { em }: Mycontext) {
    return em.find(persona, {});
  }

  @Query(() => persona, { nullable: true })
  Persona(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: Mycontext
  ): Promise<persona | null> {
    return em.findOne(persona, { id });
  }

  @Mutation(() => persona)
  async CreateUser(
    @Arg("Name") Nombre: String,
    @Arg("Genero") Genero: string,
    @Ctx() { em }: Mycontext
  ): Promise<persona | null> {
    const post = em.create(persona, { Nombre, Genero });
    await em.persistAndFlush(post);
    return post;
  }
}
