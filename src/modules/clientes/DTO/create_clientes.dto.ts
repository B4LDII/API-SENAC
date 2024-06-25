import { IsNotEmpty } from "class-validator";
import { CidadeEntity } from "src/modules/cidades/entities/cidade.entity";

export class CreateClienteDTO {
    @IsNotEmpty({ message: "O cliente não pode ser vázio!" })
    nome: string;

    @IsNotEmpty({ message: "A altura não pode ser vázia!" })
    altura: number;

    @IsNotEmpty({ message: "O Nascimento não pode ser vázio!" })
    nascimento: string;

    @IsNotEmpty({ message: "A cidade não pode ser vázia!" })
    cidade: CidadeEntity;
  }