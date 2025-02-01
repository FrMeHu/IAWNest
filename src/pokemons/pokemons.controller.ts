import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity'; // Importación de Pokemon

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get('buscar-por-nombre')
  async buscarPorNombre(@Query('nombre') nombre: string): Promise<Pokemon[]> {
    return this.pokemonsService.buscarPorNombre(nombre);
  }

  @Get('buscar-por-tipo')
  async buscarPorTipo(@Query('tipo') tipo: string): Promise<Pokemon[]> {
    return this.pokemonsService.buscarPorTipo(tipo);
  }

  @Get('buscar-por-mas-hp')
  async buscarPorMasHp(): Promise<Pokemon[]> {
    return this.pokemonsService.buscarPorMasHp();
  }
  
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonsService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonsService.remove(id);
  }

}
