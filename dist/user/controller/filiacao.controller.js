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
exports.FiliacaoController = void 0;
const common_1 = require("@nestjs/common");
const filiacao_service_1 = require("../service/filiacao.service");
const filiacao_dto_1 = require("../dto/filiacao.dto");
const jwt_auth_guard_strategy_1 = require("../../auth/guard/jwt-auth.guard.strategy");
let FiliacaoController = class FiliacaoController {
    constructor(filiacaoService) {
        this.filiacaoService = filiacaoService;
    }
    async create(createFiliacaoDto) {
        return await this.filiacaoService.create(createFiliacaoDto);
    }
    async findAll() {
        return await this.filiacaoService.findAll();
    }
    async findOne(id) {
        return await this.filiacaoService.findOne(id);
    }
    async update(id, updateFiliacaoDto) {
        return await this.filiacaoService.update(id, updateFiliacaoDto);
    }
    async remove(id) {
        return await this.filiacaoService.remove(id);
    }
};
exports.FiliacaoController = FiliacaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filiacao_dto_1.CreateFiliacaoDto]),
    __metadata("design:returntype", Promise)
], FiliacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FiliacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiliacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, filiacao_dto_1.UpdateFiliacaoDto]),
    __metadata("design:returntype", Promise)
], FiliacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiliacaoController.prototype, "remove", null);
exports.FiliacaoController = FiliacaoController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_strategy_1.JwtAuthGuard),
    (0, common_1.Controller)("filiacao"),
    __metadata("design:paramtypes", [filiacao_service_1.FiliacaoService])
], FiliacaoController);
//# sourceMappingURL=filiacao.controller.js.map