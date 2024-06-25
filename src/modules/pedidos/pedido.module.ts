import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  PedidoEntity } from "./entities/pedido.entity";
import { PedidoController } from "./pedido.controller";
import { PedidoService } from "./pedido.service";

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity])],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
