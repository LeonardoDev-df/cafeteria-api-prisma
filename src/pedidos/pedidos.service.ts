import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePedidoDto) {
    if (!dto.item || dto.item.trim() === '') {
      throw new BadRequestException('O campo "item" é obrigatório.');
    }

    try {
      return await this.prisma.pedido.create({
        data: dto,
      });
    } catch (error) {
      throw new BadRequestException('Erro ao criar o pedido.');
    }
  }

  async findAll() {
    try {
      return await this.prisma.pedido.findMany();
    } catch (error) {
      throw new BadRequestException('Erro ao buscar pedidos.');
    }
  }

  async findByStatus(status: string) {
    const allowedStatuses = ['Em preparo', 'Pronto', 'Entregue'];
    if (!allowedStatuses.includes(status)) {
      throw new BadRequestException(`Status "${status}" é inválido.`);
    }

    try {
      return await this.prisma.pedido.findMany({
        where: { status },
      });
    } catch (error) {
      throw new BadRequestException('Erro ao buscar pedidos por status.');
    }
  }

  async updateStatus(id: number, dto: UpdateStatusDto) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado.`);
    }

    try {
      return await this.prisma.pedido.update({
        where: { id },
        data: { status: dto.status },
      });
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar o status do pedido.');
    }
  }

  async delete(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado.`);
    }

    try {
      return await this.prisma.pedido.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Erro ao deletar o pedido.');
    }
  }
}
