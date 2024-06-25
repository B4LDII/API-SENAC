import { IsNotEmpty } from "class-validator";
import { ClienteEntity } from "src/modules/clientes/entities/cliente.entity";

export class CreatePedidoDTO {

    @IsNotEmpty({ message: "O horário não pode ser vázio!" })
    horario: string;

    @IsNotEmpty({ message: "O endereço não pode ser vázio!" })
    endereco: string;

    @IsNotEmpty({ message: "O cliente não pode ser vázio!" })
    cliente: ClienteEntity;
}