import { Body, Controller, Get, Post, } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";
import { v4 as uuid } from "uuid";


@Controller("/categoria")
export class CategoriaController {


  constructor(private categoriaService: CategoriaService) {}

  @Post()
  async createCategoria(
    @Body() data
  ) {

    if (!data.nome) {
      throw new Error("sem nome")
    }

    const cliente = {
      id: uuid(),
      ...data
    }
    await this.categoriaService.createCategoria(data)

    return { message: "Categoria cadastrada!" };
  }
}
