import { MikroORM } from "@mikro-orm/core";
import "reflect-metadata";
import { __prod__ } from "./constans";
import { persona } from "./entitys/Persona";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolver/hello";
import { PostResolver } from "./resolver/post";
import { UserResolver } from "./resolver/user";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { Mycontext } from "./types";
import  cors from"cors"

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  await orm.getMigrator().up();
  // const Persona=orm.em.create(persona,{Nombre:"David",Genero:"Camion"});
  //await orm.em.persistAndFlush(Persona);

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();
  app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
  }))
  app.use(
    session({
      name: "qid",
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 years
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__, //   cookie only work in http
      },
      saveUninitialized: false,
      secret: "keyboard cat",
      resave: false,
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, PostResolver],
      validate: false,
    }),
    context: ({ req, res }): Mycontext => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({ app,cors:false });

  app.listen(4000, () => {
    console.log("Servidor se inicio en el puerto :4000");
  });
};

main().catch((err) => {
  console.log(err);
});
