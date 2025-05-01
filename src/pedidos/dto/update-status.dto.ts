import { IsString } from 'class-validator';

export class UpdateStatusDto {
  @IsString()
  status: 'Em preparo' | 'Pronto' | 'Entregue';
}
