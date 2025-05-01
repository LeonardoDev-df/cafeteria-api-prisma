import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  cliente: string;

  @IsString()
  item: string;

  @IsInt()
  quantidade: number;

  @IsOptional()
  @IsString()
  observacoes?: string;
}
