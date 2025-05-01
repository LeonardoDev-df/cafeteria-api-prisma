import { Test, TestingModule } from '@nestjs/testing';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';

describe('PedidosController', () => {
  let controller: PedidosController;
  let service: PedidosService;

  const mockPedidosService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByStatus: jest.fn(),
    updateStatus: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidosController],
      providers: [
        {
          provide: PedidosService,
          useValue: mockPedidosService,
        },
      ],
    }).compile();

    controller = module.get<PedidosController>(PedidosController);
    service = module.get<PedidosService>(PedidosService);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  // Exemplo de como começar a testar métodos:
  // it('deve retornar todos os pedidos', async () => {
  //   const result = [{ id: 1, status: 'Pronto' }];
  //   mockPedidosService.findAll.mockResolvedValue(result);
  //   expect(await controller.findAll()).toEqual(result);
  // });
});
