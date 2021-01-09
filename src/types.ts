import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";

export type Mycontext {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}