import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CidadeController } from "./cidade.controller";
import { CidadeEntity } from "./entities/cidade.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CidadeEntity])],
  controllers: [CidadeController],
})
export class CidadeModule {}
