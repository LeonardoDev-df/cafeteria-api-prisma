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
    findAll(): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    findByStatus(status: string): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    findEmPreparo(): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    findProntos(): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    findEntregues(): Promise<{
        cliente: string;
        item: string;
        quantidade: number;
        observacoes: string | null;
        status: string;
        id: number;
        criadoEm: Date;
    }[]>;
    updateStatus(id: number, dto: UpdateStatusDto): Promise<{
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
