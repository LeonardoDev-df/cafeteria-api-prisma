import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log'],
    });
    

    // 🔓 Habilita CORS para permitir requisições do frontend (ex: React, Angular)
    app.enableCors();

    const port = process.env.PORT ?? 3000;
    await app.listen(port);

    console.log('✅ API de Pedidos da Cafeteria iniciada com sucesso!');
    console.log(`📡 Servidor rodando em: http://localhost:${port}`);
  } catch (error) {
    console.error('❌ Erro ao iniciar o servidor:', error);
  }
}

bootstrap();
