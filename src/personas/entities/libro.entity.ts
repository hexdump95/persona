import { Persona } from './persona.entity';
import { Column, Entity, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Base } from '../../common/generics/base.entity';
import { Autor } from "../../autores/entities/autor.entity";

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
