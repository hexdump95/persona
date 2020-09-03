import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Persona extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    dni: number;

    constructor(nombre: string, apellido: string, dni: number) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

}