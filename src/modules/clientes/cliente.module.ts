import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClienteEntity } from "./entities/cliente.entity";
import { ClienteController } from "./cliente.controller";


@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  controllers: [ClienteController],
})
export class ClienteModule {}
