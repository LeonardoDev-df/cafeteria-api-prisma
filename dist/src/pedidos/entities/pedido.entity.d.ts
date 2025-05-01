export declare class Pedido {
    id: number;
    cliente: string;
    item: string;
    quantidade: number;
    observacoes: string;
    status: 'Em preparo' | 'Pronto' | 'Entregue';
}
