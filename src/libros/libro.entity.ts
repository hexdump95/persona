import { Base } from "../generics/base.entity";
import { Autor } from "../autores/autor.entity";
import { Persona } from "../personas/persona.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Libro extends Base {

    @Column()
    fecha: number;

    @Column()
    genero: string;

    @Column()
    paginas: number;

    @Column()
    titulo: string;

    @ManyToMany(type => Autor, { cascade: ["update", "insert"] })
    @JoinTable({
        name: "libro_autor",
        joinColumn: {
            name: "libro_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "autor_id",
            referencedColumnName: "id",
        }
    })
    autores: Autor[];


    @ManyToOne(type => Persona, persona => persona.libros)
    persona: Persona;

}