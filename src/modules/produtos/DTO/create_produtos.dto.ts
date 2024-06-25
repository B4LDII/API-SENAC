import { IsNotEmpty } from "class-validator";
import { CategoriaEntity } from "src/modules/categorias/entities/categoria.entity";

export class CreateProdutoDTO {

    @IsNotEmpty({ message: "O nome não pode ser vázio!" })
    nome: string;

    @IsNotEmpty({ message: "O preço não pode ser vázio!" })
    preco: number;

    @IsNotEmpty({ message: "A quantidade não pode ser vázia!" })
    quantidade: number;

    @IsNotEmpty({ message: "A categoria não pode ser vázia!" })
    categoria: CategoriaEntity;
}