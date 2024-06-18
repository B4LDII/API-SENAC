import { Controller, Get, } from "@nestjs/common";



@Controller("/cliente")
export class ClienteController {

  @Get('/list')
  async getCidades() {
   // const savedTechnologies = await this.cidadeService.listTechnologies();
    //return savedTechnologies;
  }
}
