import { Controller, Get, } from "@nestjs/common";



@Controller("/cliente")
export class PedidoController {

  @Get('/list')
  async getCidades() {
   // const savedTechnologies = await this.cidadeService.listTechnologies();
    //return savedTechnologies;
  }
}
