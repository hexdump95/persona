import { RootEntity } from "../generics/root.entity";
import { Entity, Column } from "typeorm";

@Entity()
export class Persona extends RootEntity {

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    dni: number;

}