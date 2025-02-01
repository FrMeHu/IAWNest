import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, ILike, LessThan } from 'typeorm'; // Asegúrate de importar LessThan
import { Pelicula } from './entities/pelicula.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto'

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula, 'base1') // Especificamos el nombre de la conexión 'base1'
    private peliculasRepository: Repository<Pelicula>,
  ) {}

  async create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const nuevaPelicula = this.peliculasRepository.create(createPeliculaDto);
    return this.peliculasRepository.save(nuevaPelicula);
  }

  async findAll(): Promise<Pelicula[]> {
    return this.peliculasRepository.find();
  }

  async findOne(id: number): Promise<Pelicula> {
    const pelicula = await this.peliculasRepository.findOne({ where: { id } });
    if (!pelicula) {
      throw new NotFoundException(`La película con id ${id} no fue encontrada`);
    }
    return pelicula;
  }

  async update(id: number, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula> {
    const pelicula = await this.peliculasRepository.preload({
      id: id,
      ...updatePeliculaDto,
    });
    if (!pelicula) {
      throw new NotFoundException(`La película con id ${id} no fue encontrada`);
    }
    return this.peliculasRepository.save(pelicula);
  }

  async remove(id: number): Promise<{ message: string }> {
    const pelicula = await this.findOne(id);
    await this.peliculasRepository.remove(pelicula);
    return { message: `La película con id ${id} ha sido eliminada` };
  }

//Buscar por título
async buscarPorTitulo(titulo: string): Promise<Pelicula[]> {
  return this.peliculasRepository.find({
    where: { titulo: ILike(`%${titulo}%`) },
  });
}

//Buscar por año menor que
async buscarPorAnoMenorQue(año: number): Promise<Pelicula[]> {
  return this.peliculasRepository.find({
    where: { año: LessThan(año) },
  });
}
}
