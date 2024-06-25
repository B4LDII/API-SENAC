import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateProdutoDTO {

  @IsOptional()
  nome: string;
 
  @IsOptional()
 preco: number;

  @IsOptional()
  quantidade: number;
}