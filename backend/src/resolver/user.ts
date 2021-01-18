import { TypeInfo } from "graphql";
import { User } from "../entitys/User";
import { Mycontext } from "src/types";
import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Int,
  Mutation,
  InputType,
  Field,
  ObjectType,
} from "type-graphql";
import argon2 from "argon2";
@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class userResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: Mycontext) {
    //No esta logeado
    if (!req.session.userId) {
      return null;
    }
    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Mutation(() => userResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: Mycontext
  ): Promise<userResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "Username",
            message: "Tu usuario es muy corto",
          },
        ],
      };
    }
    if (options.password.length <= 3) {
      return {
        errors: [
          {
            field: "password",
            message: "Tu contraseña es muy corta",
          },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });
    try {
      await em.persistAndFlush(user);
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "Usuario ya tomado",
            },
          ],
        };
      }
    }
    return { user };
  }

  @Query(() => [User])
  UserFind(@Ctx() { em }: Mycontext) {
    return em.find(User, {});
  }

  @Mutation(() => userResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: Mycontext
  ): Promise<userResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "Ese usuario no existe",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Contraseña incorrecta ",
          },
        ],
      };
    }
    req.session!.userId = user.id;
    return { user };
  }
}
