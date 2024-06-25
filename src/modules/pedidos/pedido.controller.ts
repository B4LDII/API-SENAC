import { Body, Controller, Delete, Get, Param, Post, Put, } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { v4 as uuid } from "uuid";
import { UpdatePedidoDTO } from "./DTO/update_pedido.dto";


@Controller("/pedido")
export class PedidoController {

  constructor(private pedidoService: PedidoService) {}
  
  @Get()
  async getPedidos() {
   const pedidos= await this.pedidoService.findAll()
   return pedidos;
  }
  
  @Post()
  async createPedido(
    @Body() data
  ) {

    // if (!data.nome||data.preco||data.quantidade||data.categoria) {
    //   throw new Error("sem nome")
    // }

    const pedido = {
      id: uuid(),
      ...data
    }
    await this.pedidoService.createPedido(pedido)

    return { message: "Pedido cadastrado!" };
  }

  @Put("/:id")
  async updatePedido(
    @Param("id") id: string,
    @Body() data: UpdatePedidoDTO
  ) {
    const pedidoUpdated = await this.pedidoService.updatePedido(id, data);
    return {
      pedido: pedidoUpdated,
      message: "Pedido atualizado com sucesso!",
    };
  }

  @Delete("/:id")
  async deletePedido(@Param("id") id: string) {
    const pedidoDeleted = await this.pedidoService.deletePedido(id);
    return {
      pedido: pedidoDeleted,
      message: "Pedido removido com sucesso!",
    };
  }
}
