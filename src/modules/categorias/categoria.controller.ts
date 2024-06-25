import { Body, Controller, Get, Post, } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";
import { v4 as uuid } from "uuid";
import { CreateCategoriasDTO } from "./DTO/create_categorias.dto";
import { CategoriaEntity } from "./entities/categoria.entity";


@Controller("/categoria")
export class CategoriaController {


  constructor(private categoriaService: CategoriaService) {}

  @Post()
  async createCategoria(
    @Body() data: CreateCategoriasDTO
  ) {
    const categoriaEntity = new CategoriaEntity();

    categoriaEntity.id = uuid();
    categoriaEntity.nome = data.nome;
  
    await this.categoriaService.createCategoria(categoriaEntity)

    return { message: "Categoria cadastrada!" };
  }
}
