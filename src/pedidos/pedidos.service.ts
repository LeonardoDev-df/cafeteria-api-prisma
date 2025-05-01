import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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

    return this.prisma.pedido.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  async updateStatus(id: number, dto: UpdateStatusDto) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado.`);
    }

    return this.prisma.pedido.update({
      where: { id },
      data: { status: dto.status },
    });
  }

  findByStatus(status: string) {
    return this.prisma.pedido.findMany({
      where: { status },
    });
  }

  async delete(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado.`);
    }

    return this.prisma.pedido.delete({
      where: { id },
    });
  }
}
