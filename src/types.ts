import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Session, SessionData } from 'express-session'
import { Request, Response } from 'express'

export type Mycontext={
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
    req: Request & { session: Session & Partial<SessionData> & { userId?: number } }
    res:Response;
}