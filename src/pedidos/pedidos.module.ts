// pedidos.module.ts
import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { PrismaModule } from '../../prisma/prisma.module'; // Módulo responsável pelo PrismaService

@Module({
  imports: [PrismaModule],
  controllers: [PedidosController],
  providers: [PedidosService],
  exports: [PedidosService], // opcional, útil se outro módulo precisar usar esse service
})
export class PedidosModule {}
