import { Test, TestingModule } from '@nestjs/testing';
import { PedidosService } from './pedidos.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('PedidosService', () => {
  let service: PedidosService;
  let prisma: PrismaService;

  const mockPrisma = {
    pedido: {
      create: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PedidosService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<PedidosService>(PedidosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  // Exemplo de teste unitário do método findAll
  it('deve retornar todos os pedidos', async () => {
    const pedidosMock = [{ id: 1, status: 'Em preparo' }];
    mockPrisma.pedido.findMany.mockResolvedValue(pedidosMock);

    const result = await service.findAll();
    expect(result).toEqual(pedidosMock);
    expect(mockPrisma.pedido.findMany).toHaveBeenCalled();
  });
});
