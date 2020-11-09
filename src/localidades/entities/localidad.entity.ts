import { Base } from '../../common/generics/base.entity';
import { Column, Entity } from 'typeorm'

@Entity()
export class Localidad extends Base {

    @Column()
    denominacion: string;

}
