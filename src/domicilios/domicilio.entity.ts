import { Base } from "../generics/base.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Localidad } from "../localidades/localidad.entity";

@Entity()
export class Domicilio extends Base {

    @Column()
    calle: string;

    @Column()
    numero: number;

    @ManyToOne(type => Localidad, { nullable: false })
    @JoinColumn({ name: "fk_localidad" })
    localidad: Localidad;

}