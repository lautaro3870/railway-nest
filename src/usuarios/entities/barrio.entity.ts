import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Barrio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barrio: string;

  @OneToMany(() => Usuario, (usuario) => usuario.id)
  usuarios: Usuario[];
}
