import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Persona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    dni: number;

    constructor(nombre: string, apellido: string, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

}