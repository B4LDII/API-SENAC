import { Controller, Get, } from "@nestjs/common";



@Controller("/produto")
export class PedidoProdutoController {

  @Get('/list')
  async getCidades() {
   // const savedTechnologies = await this.cidadeService.listTechnologies();
    //return savedTechnologies;
  }
}
