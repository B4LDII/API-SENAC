import { Body, Controller, Get, Post, } from "@nestjs/common";
import { ClienteEntity } from "./entities/cliente.entity";
import { ClienteService } from "./cliente.service";

import { v4 as uuid } from "uuid";


@Controller("/cliente")
export class ClienteController {
  constructor(private clienteService: ClienteService) {
    
  }

  @Post()
  async createCliente(
    @Body() data
  ) {

    if (!data.nome||data.altura||data.cidade||data.nascimento) {
      throw new Error("sem nome")
    }

    const cliente = {
      id: uuid(),
      ...data
    }
    await this.clienteService.createCliente(cliente)

    return { message: "Cliente cadastrada!" };
  }
}
