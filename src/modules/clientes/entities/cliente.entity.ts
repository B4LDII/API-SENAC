
import { CidadeEntity } from "src/modules/cidades/entities/cidade.entity";
import { PedidoEntity } from "src/modules/pedidos/entities/pedido.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Double,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity({ name: "clientes" })
export class ClienteEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @Column({ name: "altura", nullable: false })
  altura: number;

  @Column({ name: "nascimento", type: "date", nullable: false })
  nascimento: string;

  @ManyToOne(() => CidadeEntity, cidade => cidade.clientes)
  @JoinColumn({ name: 'cidade_id' })
  cidade: CidadeEntity;

  @OneToMany(() => PedidoEntity, pedido => pedido.cliente)
  pedidos: PedidoEntity[];
}


