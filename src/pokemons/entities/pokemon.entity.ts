// pokemon.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  tipo: string;

  @Column({ type: 'int' })
  hp: number;

  @Column({ type: 'int' })
  ataque: number;

  @Column({ type: 'int' })
  defensa: number;

  @Column({ type: 'int' })
  ataque_especial: number;

  @Column({ type: 'int' })
  defensa_especial: number;

  @Column({ type: 'int' })
  velocidad: number;

  @Column({ type: 'varchar', length: 255 })
  imagen: string;
}
