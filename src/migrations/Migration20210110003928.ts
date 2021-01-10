import { Migration } from '@mikro-orm/migrations';

export class Migration20210110003928 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "persona" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "nombre" text not null, "genero" text not null);');
  }

}
