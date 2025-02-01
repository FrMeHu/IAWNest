import { PartialType } from '@nestjs/mapped-types';
import { CreatePeliculaDto } from './create-pelicula.dto';
import { IsInt, IsString, Min, Max, IsOptional } from 'class-validator';

export class UpdatePeliculaDto extends PartialType(CreatePeliculaDto) {
  @IsOptional()
  @IsString({ message: 'El título debe ser una cadena de texto' })
  titulo?: string;

  @IsOptional()
  @IsString({ message: 'El director debe ser una cadena de texto' })
  director?: string;

  @IsOptional()
  @IsInt({ message: 'El año debe ser un número entero' })
  @Min(1888, { message: 'El año debe ser posterior o igual a 1888' })
  @Max(new Date().getFullYear(), { message: 'El año no puede ser en el futuro' })
  año?: number;

  @IsOptional()
  @IsInt({ message: 'Los minutos deben ser un número entero' })
  @Min(1, { message: 'La duración debe ser al menos de 1 minuto' })
  minutos?: number;
}
