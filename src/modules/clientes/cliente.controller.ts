import { Body, Controller, Get, Post, } from "@nestjs/common";
import { ClienteEntity } from "./entities/cliente.entity";
import { ClienteService } from "./cliente.service";
import { v4 as uuid } from "uuid";
import { CreateClienteDTO } from "./DTO/create_clientes.dto";


@Controller("/cliente")
export class ClienteController {
  constructor(private clienteService: ClienteService) {
    
  }

  @Post()
  async createCliente(
    @Body() data: CreateClienteDTO
  ) {
    const clienteEntity = new ClienteEntity();

    clienteEntity.id = uuid();
    clienteEntity.nome = data.nome;
    clienteEntity.altura = data.altura;
    clienteEntity.nascimento = data.nascimento;
    clienteEntity.cidade = data.cidade;
  
    await this.clienteService.createCliente(clienteEntity)

    return { message: "Cliente cadastrado!" };
  }
}
