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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePedidoDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePedidoDto {
    cliente;
    item;
    quantidade;
    observacoes;
}
exports.CreatePedidoDto = CreatePedidoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "cliente" deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "cliente" não pode estar vazio.' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "cliente", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O campo "item" deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo "item" não pode estar vazio.' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "item", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'O campo "quantidade" deve ser um número inteiro.' }),
    (0, class_validator_1.Min)(1, { message: 'O campo "quantidade" deve ser no mínimo 1.' }),
    __metadata("design:type", Number)
], CreatePedidoDto.prototype, "quantidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O campo "observacoes", se fornecido, deve ser uma string.' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "observacoes", void 0);
//# sourceMappingURL=create-pedido.dto.js.map