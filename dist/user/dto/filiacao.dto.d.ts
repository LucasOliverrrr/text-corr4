export declare class CreateFiliacaoDto {
    nome: string;
    endereco: string;
    cidade: string;
    bairro: string;
    uf: string;
    userId: number;
}
declare const UpdateFiliacaoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFiliacaoDto>>;
export declare class UpdateFiliacaoDto extends UpdateFiliacaoDto_base {
}
export {};
