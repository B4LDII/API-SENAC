import { IsNotEmpty } from "class-validator";

export class CreateCategoriasDTO {
    @IsNotEmpty({ message: "O nome não pode ser vázio!" })
    nome: string;

  }