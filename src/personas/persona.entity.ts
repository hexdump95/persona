import { Base } from "../generics/base.entity";
import { Entity, Column, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Domicilio } from "../domicilios/domicilio.entity";
import { Libro } from "../libros/libro.entity";

@Entity()
export class Persona extends Base {

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  dni: number;

  @OneToOne(() => Domicilio, { cascade: true, eager: true })
  @JoinColumn({ name: 'fk_domicilio' })
  domicilio: Domicilio;

  @OneToMany(type => Libro, libro => libro.persona, { cascade: ["remove", "update", "insert"], eager: true })
  libros: Libro[];

}