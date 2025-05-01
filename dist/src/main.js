"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            logger: ['error', 'warn', 'log'],
        });
        app.enableCors();
        const port = process.env.PORT ?? 3000;
        await app.listen(port);
        console.log('✅ API de Pedidos da Cafeteria iniciada com sucesso!');
        console.log(`📡 Servidor rodando em: http://localhost:${port}`);
    }
    catch (error) {
        console.error('❌ Erro ao iniciar o servidor:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map