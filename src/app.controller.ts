import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    try {
      return this.appService.getHello();
    } catch (error) {
      // Log do erro ou outras ações aqui
      console.error('Erro em getHello:', error);
      // Lança uma exceção HTTP 500
      throw new InternalServerErrorException('Erro interno ao buscar mensagem.');
    }
  }
}
