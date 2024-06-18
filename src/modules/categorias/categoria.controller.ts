import { Controller, Get, } from "@nestjs/common";



@Controller("/categoria")
export class CategoriaController {


  @Get('/list')
  async getCidades() {
   // const savedTechnologies = await this.cidadeService.listTechnologies();
    //return savedTechnologies;
  }
}
