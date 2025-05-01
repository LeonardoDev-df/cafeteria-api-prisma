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
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  async create(@Body() dto: CreatePedidoDto) {
    try {
      return await this.pedidosService.create(dto);
    } catch (error) {
      throw new BadRequestException('Erro ao criar pedido: ' + error.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.pedidosService.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar pedidos');
    }
  }

  @Get('status')
  async findByStatus(@Query('status') status: string) {
    try {
      return await this.pedidosService.findByStatus(status);
    } catch (error) {
      throw new BadRequestException('Erro ao filtrar pedidos por status');
    }
  }

  @Get('status/em-preparo')
  async findEmPreparo() {
    try {
      return await this.pedidosService.findByStatus('Em preparo');
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar pedidos em preparo');
    }
  }

  @Get('status/pronto')
  async findProntos() {
    try {
      return await this.pedidosService.findByStatus('Pronto');
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar pedidos prontos');
    }
  }

  @Get('status/entregue')
  async findEntregues() {
    try {
      return await this.pedidosService.findByStatus('Entregue');
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar pedidos entregues');
    }
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStatusDto,
  ) {
    try {
      const pedidoAtualizado = await this.pedidosService.updateStatus(id, dto);
      if (!pedidoAtualizado) {
        throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
      }
      return pedidoAtualizado;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new BadRequestException('Erro ao atualizar status do pedido');
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.pedidosService.delete(id);
    } catch (error) {
      throw new NotFoundException(`Erro ao deletar pedido com ID ${id}`);
    }
  }
}
