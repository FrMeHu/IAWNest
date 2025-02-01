import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { IsOptional, IsString, IsInt, Min, IsUrl } from 'class-validator';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  nombre?: string;

  @IsOptional()
  @IsString({ message: 'El tipo debe ser una cadena de texto' })
  tipo?: string;

  @IsOptional()
  @IsInt({ message: 'El HP debe ser un número entero' })
  @Min(1, { message: 'El HP debe ser al menos 1' })
  hp?: number;

  @IsOptional()
  @IsInt({ message: 'El ataque debe ser un número entero' })
  @Min(1, { message: 'El ataque debe ser al menos 1' })
  ataque?: number;

  @IsOptional()
  @IsInt({ message: 'La defensa debe ser un número entero' })
  @Min(1, { message: 'La defensa debe ser al menos 1' })
  defensa?: number;

  @IsOptional()
  @IsInt({ message: 'El ataque especial debe ser un número entero' })
  @Min(1, { message: 'El ataque especial debe ser al menos 1' })
  ataque_especial?: number;

  @IsOptional()
  @IsInt({ message: 'La defensa especial debe ser un número entero' })
  @Min(1, { message: 'La defensa especial debe ser al menos 1' })
  defensa_especial?: number;

  @IsOptional()
  @IsInt({ message: 'La velocidad debe ser un número entero' })
  @Min(1, { message: 'La velocidad debe ser al menos 1' })
  velocidad?: number;

  @IsOptional()
  @IsString({ message: 'La imagen debe ser una cadena de texto' })
  @IsUrl({}, { message: 'La imagen debe ser una URL válida' })
  imagen?: string;
}
