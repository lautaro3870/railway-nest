import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Barrio } from './barrio.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombrre: string;

  @Column({ nullable: false })
  apellido: string;

  @Column({ nullable: false })
  edad: number;

  //con esta relacion, estamos diciendo que un usuario tiene asignado un
  //barrio de una tabla auxiliar atraves de su id
  @ManyToOne((type) => Barrio, (barrio) => barrio.usuarios)
  @JoinColumn({ name: 'barrio_id' })
  barrio: number;
}
