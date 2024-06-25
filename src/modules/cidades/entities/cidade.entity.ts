
import { ClienteEntity } from "src/modules/clientes/entities/cliente.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

@Entity({ name: "cidades" })
export class CidadeEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "nome", length: 50, nullable: false })
  nome: string;

  @OneToMany(() => ClienteEntity, cliente => cliente.cidade)
  clientes: ClienteEntity[];
  static nome: string;
  static id: string;
}
