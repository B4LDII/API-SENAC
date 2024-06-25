import { Body, Controller, Get, Post, } from "@nestjs/common";
import { CidadeService } from "./cidade.service";
import { v4 as uuid } from "uuid";
import { CreateCidadeDTO } from "./DTO/create_cidade.dto";
import { CidadeEntity } from "./entities/cidade.entity";
@Controller("/cidade")
export class CidadeController {
  
  constructor(private cidadeService: CidadeService) {}

  @Post()
  async createCliente(
    @Body() data: CreateCidadeDTO
  ) {
    const cidadeEntity = new CidadeEntity();

    CidadeEntity.id = uuid();
    CidadeEntity.nome = data.nome;
  
    await this.cidadeService.createCidade(cidadeEntity)

    return { message: "Cidade cadastrada!" };
  }
}
