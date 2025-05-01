import { IsString, IsInt, IsOptional, Min, IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @IsString({ message: 'O campo "cliente" deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "cliente" não pode estar vazio.' })
  cliente: string;

  @IsString({ message: 'O campo "item" deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "item" não pode estar vazio.' })
  item: string;

  @IsInt({ message: 'O campo "quantidade" deve ser um número inteiro.' })
  @Min(1, { message: 'O campo "quantidade" deve ser no mínimo 1.' })
  quantidade: number;

  @IsOptional()
  @IsString({ message: 'O campo "observacoes", se fornecido, deve ser uma string.' })
  observacoes?: string;
}
