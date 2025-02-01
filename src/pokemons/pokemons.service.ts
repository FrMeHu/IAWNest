import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon, 'base2')
    private readonly pokemonsRepository: Repository<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const nuevoPokemon = this.pokemonsRepository.create(createPokemonDto);
    return this.pokemonsRepository.save(nuevoPokemon);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonsRepository.find();
  }

  async findOne(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonsRepository.findOne({ where: { id } });
    if (!pokemon) {
      throw new NotFoundException(`El Pokémon con id ${id} no fue encontrado.`);
    }
    return pokemon;
  }

  async update(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.pokemonsRepository.preload({
      id: id,
      ...updatePokemonDto,
    });
    if (!pokemon) {
      throw new NotFoundException(`El Pokémon con id ${id} no fue encontrado.`);
    }
    return this.pokemonsRepository.save(pokemon);
  }

  async remove(id: number): Promise<void> {
    const pokemon = await this.findOne(id);
    await this.pokemonsRepository.remove(pokemon);
  }

  async buscarPorNombre(nombre: string): Promise<Pokemon[]> {
    return this.pokemonsRepository.find({
      where: { nombre: ILike(`%${nombre}%`) },
    });
  }

  async buscarPorTipo(tipo: string): Promise<Pokemon[]> {
    return this.pokemonsRepository.find({
      where: { tipo: ILike(`%${tipo}%`) },
    });
  }

  async buscarPorMasHp(): Promise<Pokemon[]> {
    return this.pokemonsRepository.find({
      order: { hp: 'DESC' },
    });
  }
}