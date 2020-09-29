import { Column, Entity } from "typeorm";
import { Base } from "../generics/base.entity";

@Entity()
export class Autor extends Base {

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ length: 1500 })
    biografia: string;

}