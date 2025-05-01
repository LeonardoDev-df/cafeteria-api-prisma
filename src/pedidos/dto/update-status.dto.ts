import { IsString, IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsString()
  @IsIn(['Em preparo', 'Pronto', 'Entregue'], {
    message: 'Status deve ser "Em preparo", "Pronto" ou "Entregue".',
  })
  status: 'Em preparo' | 'Pronto' | 'Entregue';
}
