"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosController = void 0;
const common_1 = require("@nestjs/common");
const pedidos_service_1 = require("./pedidos.service");
const create_pedido_dto_1 = require("./dto/create-pedido.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
let PedidosController = class PedidosController {
    pedidosService;
    constructor(pedidosService) {
        this.pedidosService = pedidosService;
    }
    async create(dto) {
        try {
            return await this.pedidosService.create(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao criar pedido: ' + error.message);
        }
    }
    async findAll() {
        try {
            return await this.pedidosService.findAll();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar pedidos');
        }
    }
    async findByStatus(status) {
        try {
            return await this.pedidosService.findByStatus(status);
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao filtrar pedidos por status');
        }
    }
    async findEmPreparo() {
        try {
            return await this.pedidosService.findByStatus('Em preparo');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar pedidos em preparo');
        }
    }
    async findProntos() {
        try {
            return await this.pedidosService.findByStatus('Pronto');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar pedidos prontos');
        }
    }
    async findEntregues() {
        try {
            return await this.pedidosService.findByStatus('Entregue');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar pedidos entregues');
        }
    }
    async updateStatus(id, dto) {
        try {
            const pedidoAtualizado = await this.pedidosService.updateStatus(id, dto);
            if (!pedidoAtualizado) {
                throw new common_1.NotFoundException(`Pedido com ID ${id} não encontrado`);
            }
            return pedidoAtualizado;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.BadRequestException('Erro ao atualizar status do pedido');
        }
    }
    async delete(id) {
        try {
            return await this.pedidosService.delete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Erro ao deletar pedido com ID ${id}`);
        }
    }
};
exports.PedidosController = PedidosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('status'),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)('status/em-preparo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findEmPreparo", null);
__decorate([
    (0, common_1.Get)('status/pronto'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findProntos", null);
__decorate([
    (0, common_1.Get)('status/entregue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findEntregues", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "delete", null);
exports.PedidosController = PedidosController = __decorate([
    (0, common_1.Controller)('pedidos'),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
//# sourceMappingURL=pedidos.controller.js.map