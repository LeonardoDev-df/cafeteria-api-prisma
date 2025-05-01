import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(dto: CreatePedidoDto): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    findByStatus(status: 'Em preparo' | 'Pronto' | 'Entregue'): import(".prisma/client").Prisma.PrismaPromise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    updateStatus(id: string, dto: UpdateStatusDto): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }>;
    delete(id: number): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }>;
}
