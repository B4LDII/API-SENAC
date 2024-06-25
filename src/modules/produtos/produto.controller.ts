import { Body, Controller, Delete, Get, Param, Post, Put, Req, } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { v4 as uuid } from "uuid";
import { UpdateProdutoDTO } from "./DTO/update_produto.DTO";
import { ProdutoEntity } from "./entities/produto.entity";
import { CreateProdutoDTO } from "./DTO/create_produtos.dto";


@Controller("/produto")
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}
  
  @Get()
  async getProdutos() {
   const produtos= await this.produtoService.findAll()
   return produtos;
  }
  
  @Post()
  async createProduto(
    @Body() data: CreateProdutoDTO
  ) {
    const produtoEntity = new ProdutoEntity();

    produtoEntity.id = uuid();
    produtoEntity.nome = data.nome;
    produtoEntity.preco = data.preco;
    produtoEntity.quantidade = data.quantidade;
    produtoEntity.categoria = data.categoria;
   
  
    await this.produtoService.createProduto(produtoEntity)

    return { message: "Produto cadastrado!" };
  }

  @Put("/:id")
  async updateProduto(
    @Param("id") id: string,
    @Body() data: UpdateProdutoDTO
  ) {
    const produtoUpdated = await this.produtoService.updateProduto(id, data);
    return {
      produto: produtoUpdated,
      message: "Produto atualizado com sucesso!",
    };
  }

  @Delete("/:id")
  async deleteProduto(@Param("id") id: string) {
    const produtoDeleted = await this.produtoService.deleteProduto(id);
    return {
      produto: produtoDeleted,
      message: "Produto removido com sucesso!",
    };
  }
}
 