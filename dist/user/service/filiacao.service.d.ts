import { User } from "./../entity/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Filiacao } from "../entity/filiacao.entity";
import { CreateFiliacaoDto, UpdateFiliacaoDto } from "../dto/filiacao.dto";
export declare class FiliacaoService {
    private filiacaoRepository;
    private userService;
    constructor(filiacaoRepository: Repository<Filiacao>, userService: UserService);
    create(createFiliacaoDto: CreateFiliacaoDto): Promise<Filiacao>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<Filiacao>;
    update(id: number, updateFiliacaoDto: UpdateFiliacaoDto): Promise<Filiacao>;
    remove(id: number): Promise<void>;
}
