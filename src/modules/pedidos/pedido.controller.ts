import { Body, Controller, Delete, Get, Param, Post, Put, } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { v4 as uuid } from "uuid";
import { UpdatePedidoDTO } from "./DTO/update_pedido.dto";
import { CreatePedidoDTO } from "./DTO/create_pedidos.dto";
import { PedidoEntity } from "./entities/pedido.entity";


@Controller("/pedido")
export class PedidoController {

  constructor(private pedidoService: PedidoService) {}
  
  @Get()
  async getPedidos() {
   const pedidos= await this.pedidoService.findAll()
   return pedidos;
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

  @Post()
  async createPedido(
    @Body() data: CreatePedidoDTO
  ) {
    const pedidoEntity = new PedidoEntity();

    pedidoEntity.id = uuid();
    pedidoEntity.horario = data.horario;
    pedidoEntity.endereco = data.endereco;
    pedidoEntity.cliente = data.cliente;
   
  
    await this.pedidoService.createPedido(pedidoEntity)

    return { message: "Pedido cadastrado!" };
  }
}
