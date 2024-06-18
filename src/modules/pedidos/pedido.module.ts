import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  PedidoEntity } from "./entities/pedido.entity";
import { PedidoController } from "./pedido.controller";

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity])],
  controllers: [PedidoController],
})
export class PedidoModule {}
