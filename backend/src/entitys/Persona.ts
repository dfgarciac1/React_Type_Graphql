import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";
@ObjectType()
@Entity()
export class persona {
  @Field(()=>Int)
  @PrimaryKey()
  id!: number;
  @Field(()=>String)
  @Property({type:"date"})
  createdAt = new Date();
  @Field(()=>String)
  @Property({ type:"date",onUpdate: () => new Date() })
  updatedAt = new Date();
  @Field()
  @Property({type:"text",unique:true})
  Nombre!: string;
  @Field()
  @Property({type:"text",unique:true})
  Password!: string;
  @Field()
  @Property({type:"text"})
  Genero!: string;

}