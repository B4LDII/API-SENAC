import { Controller, Get, } from "@nestjs/common";

@Controller("/cidade")
export class CidadeController {
  

  @Get('/list')
  async getCidades() {
   // const savedTechnologies = await this.cidadeService.listTechnologies();
    //return savedTechnologies;
  }
}
