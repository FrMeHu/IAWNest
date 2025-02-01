import { Controller, Get, Post, Body, Param, Delete, Put, Query, ParseIntPipe } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity'

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  async create(@Body() createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    return this.peliculasService.create(createPeliculaDto);
  }

  @Get()
  async findAll(): Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }

  @Get('buscar-por-titulo')
  async buscarPorTitulo(@Query('titulo') titulo: string): Promise<Pelicula[]> {
    return this.peliculasService.buscarPorTitulo(titulo);
  }

  @Get('buscar-por-ano-menor-que')
  async buscarPorAnoMenorQue(@Query('año', ParseIntPipe) año: number): Promise<Pelicula[]> {
    return this.peliculasService.buscarPorAnoMenorQue(año);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Pelicula> {
    return this.peliculasService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePeliculaDto: UpdatePeliculaDto,
  ): Promise<Pelicula> {
    return this.peliculasService.update(id, updatePeliculaDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.peliculasService.remove(id);
    return { message: `La película con id ${id} ha sido eliminada` };
  }
}
