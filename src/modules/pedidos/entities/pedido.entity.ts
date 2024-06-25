
import { ClienteEntity } from "src/modules/clientes/entities/cliente.entity";
import { PedidoProdutoEntity } from "src/modules/pedidos_produtos/entities/pedido_produto.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
 
  OneToMany,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "pedidos" })
export class PedidoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "horario", })
  horario: string;
  
  @Column({ name: "preco", length: 100, nullable: false })
  endereco: string;

  @ManyToOne(() => ClienteEntity, cliente => cliente.pedidos)
  @JoinColumn({ name: 'cliente_id' })
  cliente: ClienteEntity;

  @OneToMany(() => PedidoProdutoEntity, pedidoProduto => pedidoProduto.pedido)
  pedidoProdutos: PedidoProdutoEntity[];
}

