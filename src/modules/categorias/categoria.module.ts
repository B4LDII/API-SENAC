import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaEntity } from "./entities/categoria.entity";
import { CategoriaController } from "./categoria.controller";


@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntity])],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
