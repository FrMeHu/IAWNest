import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pelicula {
  @PrimaryGeneratedColumn() // Genera un id autoincremental
  id: number;

  @Column({ type: 'varchar', length: 100 })
  titulo: string;

  @Column({ type: 'varchar', length: 100 })
  director: string;

  @Column({ type: 'int' })
  año: number;

  @Column({ type: 'int' })
  minutos: number;
}
