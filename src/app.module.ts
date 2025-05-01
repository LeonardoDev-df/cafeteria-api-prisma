import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PedidosModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
