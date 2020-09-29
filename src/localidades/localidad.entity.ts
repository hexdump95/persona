import { Column, Entity } from "typeorm";
import { Base } from "../generics/base.entity";

@Entity()
export class Localidad extends Base {

    @Column()
    denominacion: string;

}