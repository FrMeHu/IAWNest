import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

export class CreatePeliculaDto {
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @IsString({ message: 'El título debe ser una cadena de texto' })
  titulo: string;

  @IsNotEmpty({ message: 'El director es obligatorio' })
  @IsString({ message: 'El director debe ser una cadena de texto' })
  director: string;

  @IsNotEmpty({ message: 'El año es obligatorio' })
  @IsInt({ message: 'El año debe ser un número entero' })
  @Min(1888, { message: 'El año debe ser posterior o igual a 1888' })
  @Max(new Date().getFullYear(), { message: 'El año no puede ser en el futuro' })
  año: number;

  @IsNotEmpty({ message: 'La duración en minutos es obligatoria' })
  @IsInt({ message: 'La duración debe ser un número entero' })
  @Min(1, { message: 'La duración debe ser al menos de 1 minuto' })
  minutos: number;
}
