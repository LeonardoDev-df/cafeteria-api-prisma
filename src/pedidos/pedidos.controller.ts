import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Query,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  create(@Body() dto: CreatePedidoDto) {
    return this.pedidosService.create(dto);
  }

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  // ✅ Rota com filtro dinâmico por status (opcional)
  @Get('status')
  findByStatus(@Query('status') status: string) {
    return this.pedidosService.findByStatus(status);
  }

  // ✅ Rotas específicas para status fixos
  @Get('status/em-preparo')
  findEmPreparo() {
    return this.pedidosService.findByStatus('Em preparo');
  }

  @Get('status/pronto')
  findProntos() {
    return this.pedidosService.findByStatus('Pronto');
  }

  @Get('status/entregue')
  findEntregues() {
    return this.pedidosService.findByStatus('Entregue');
  }

  @Patch(':id/status')
  updateStatus(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStatusDto) {
    return this.pedidosService.updateStatus(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.delete(id);
  }
}
