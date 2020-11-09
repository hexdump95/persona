import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from '../../common/generics/base.entity';
import { Localidad } from "../../localidades/entities/localidad.entity";

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
