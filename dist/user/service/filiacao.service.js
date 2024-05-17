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
exports.FiliacaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_service_1 = require("./user.service");
const filiacao_entity_1 = require("../entity/filiacao.entity");
let FiliacaoService = class FiliacaoService {
    constructor(filiacaoRepository, userService) {
        this.filiacaoRepository = filiacaoRepository;
        this.userService = userService;
    }
    async create(createFiliacaoDto) {
        const user = await this.userService.findOne(createFiliacaoDto.userId);
        if (!user) {
            throw new common_1.NotFoundException(`Usuário não encontrado.`);
        }
        const newFiliacao = this.filiacaoRepository.create({
            ...createFiliacaoDto,
            user: user,
        });
        return await this.filiacaoRepository.save(newFiliacao);
    }
    async findAll() {
        return await this.userService.findAll();
    }
    async findOne(id) {
        const filiacao = await this.filiacaoRepository.findOne({
            where: { id_perfil: id },
            relations: ["user"],
        });
        if (!filiacao) {
            throw new common_1.NotFoundException(`Filiação não encontrada.`);
        }
        return filiacao;
    }
    async update(id, updateFiliacaoDto) {
        const filiacao = await this.findOne(id);
        delete updateFiliacaoDto.userId;
        const updated = this.filiacaoRepository.merge(filiacao, updateFiliacaoDto);
        return await this.filiacaoRepository.save(updated);
    }
    async remove(id) {
        const filiacao = await this.findOne(id);
        await this.filiacaoRepository.remove(filiacao);
    }
};
exports.FiliacaoService = FiliacaoService;
exports.FiliacaoService = FiliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(filiacao_entity_1.Filiacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], FiliacaoService);
//# sourceMappingURL=filiacao.service.js.map