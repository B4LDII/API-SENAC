import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CidadeController } from "./cidade.controller";
import { CidadeEntity } from "./entities/cidade.entity";
import { CidadeService } from "./cidade.service";

@Module({
  imports: [TypeOrmModule.forFeature([CidadeEntity])],
  controllers: [CidadeController],
  providers: [CidadeService]
})
export class CidadeModule {}
