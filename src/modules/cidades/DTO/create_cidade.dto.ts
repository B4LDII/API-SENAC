import { IsNotEmpty } from "class-validator";

export class CreateCidadeDTO {
    @IsNotEmpty({ message: "A cidade não pode ser vázia!" })
    nome: string;

  }