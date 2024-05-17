import { FiliacaoService } from "../service/filiacao.service";
import { CreateFiliacaoDto, UpdateFiliacaoDto } from "../dto/filiacao.dto";
export declare class FiliacaoController {
    private readonly filiacaoService;
    constructor(filiacaoService: FiliacaoService);
    create(createFiliacaoDto: CreateFiliacaoDto): Promise<import("../entity/filiacao.entity").Filiacao>;
    findAll(): Promise<import("../entity/user.entity").User[]>;
    findOne(id: number): Promise<import("../entity/filiacao.entity").Filiacao>;
    update(id: number, updateFiliacaoDto: UpdateFiliacaoDto): Promise<import("../entity/filiacao.entity").Filiacao>;
    remove(id: number): Promise<void>;
}
