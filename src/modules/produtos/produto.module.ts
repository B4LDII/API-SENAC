import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoEntity } from "./entities/produto.entity";
import { ProdutoController } from "./produto.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers:[ProdutoController],
})
export class ProdutoModule {}
