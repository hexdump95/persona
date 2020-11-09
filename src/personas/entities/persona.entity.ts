import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Base } from "../../common/generics/base.entity";
import { Domicilio } from "./domicilio.entity";
import { Libro } from "./libro.entity";


@Entity()
export class Persona extends Base {

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    dni: number;

    @OneToOne(() => Domicilio, { cascade: true })
    @JoinColumn({ name: 'fk_domicilio' })
    domicilio: Domicilio;

    @OneToMany(type => Libro, libro => libro.persona, { cascade: ["remove", "update", "insert"] })
    libros: Libro[];

}
