import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('🚀 Prisma conectado ao banco de dados.');
    } catch (error) {
      this.logger.error('❌ Erro ao conectar com o banco de dados:', error);
      throw error;
    }
   
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('❌ Prisma desconectado do banco de dados.');
    } catch (error) {
      this.logger.error('⚠️ Erro ao desconectar do banco de dados:', error);
    }
  }
}
