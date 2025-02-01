import { IsNotEmpty, IsString, IsInt, Min, IsUrl } from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  nombre: string;

  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  @IsString({ message: 'El tipo debe ser una cadena de texto' })
  tipo: string;

  @IsNotEmpty({ message: 'El HP es obligatorio' })
  @IsInt({ message: 'El HP debe ser un número entero' })
  @Min(1, { message: 'El HP debe ser al menos 1' })
  hp: number;

  @IsNotEmpty({ message: 'El ataque es obligatorio' })
  @IsInt({ message: 'El ataque debe ser un número entero' })
  @Min(1, { message: 'El ataque debe ser al menos 1' })
  ataque: number;

  @IsNotEmpty({ message: 'La defensa es obligatoria' })
  @IsInt({ message: 'La defensa debe ser un número entero' })
  @Min(1, { message: 'La defensa debe ser al menos 1' })
  defensa: number;

  @IsNotEmpty({ message: 'El ataque especial es obligatorio' })
  @IsInt({ message: 'El ataque especial debe ser un número entero' })
  @Min(1, { message: 'El ataque especial debe ser al menos 1' })
  ataque_especial: number;

  @IsNotEmpty({ message: 'La defensa especial es obligatoria' })
  @IsInt({ message: 'La defensa especial debe ser un número entero' })
  @Min(1, { message: 'La defensa especial debe ser al menos 1' })
  defensa_especial: number;

  @IsNotEmpty({ message: 'La velocidad es obligatoria' })
  @IsInt({ message: 'La velocidad debe ser un número entero' })
  @Min(1, { message: 'La velocidad debe ser al menos 1' })
  velocidad: number;

  @IsNotEmpty({ message: 'La imagen es obligatoria' })
  @IsString({ message: 'La imagen debe ser una cadena de texto' })
  @IsUrl({}, { message: 'La imagen debe ser una URL válida' })
  imagen: string;
}
