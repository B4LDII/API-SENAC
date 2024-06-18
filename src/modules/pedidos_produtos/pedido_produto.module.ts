import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PedidoProdutoEntity } from "./entities/pedido_produto.entity";
import { PedidoProdutoController } from "./pedido_produto.controller";

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProdutoEntity])],
  controllers:[PedidoProdutoController],
})
export class PedidoProdutoModule {}
