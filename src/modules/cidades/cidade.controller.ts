import { Body, Controller, Get, Post, } from "@nestjs/common";
import { CidadeService } from "./cidade.service";
import { v4 as uuid } from "uuid";
@Controller("/cidade")
export class CidadeController {
  
  constructor(private cidadeService: CidadeService) {}

  @Post()
  async createCliente(
    @Body() data
  ) {

    if (!data.nome) {
      throw new Error("sem nome")
    }

    const cliente = {
      id: uuid(),
      ...data
    }
    await this.cidadeService.createCidade(data)

    return { message: "Cidade cadastrada!" };
  }
}
