import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(dto: CreatePedidoDto): Promise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }[]>;
    findByStatus(status: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }[]>;
    findEmPreparo(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }[]>;
    findProntos(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }[]>;
    findEntregues(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }[]>;
    updateStatus(id: number, dto: UpdateStatusDto): Promise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        criadoEm: Date;
    }>;
}
