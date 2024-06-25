
import { PedidoEntity } from "src/modules/pedidos/entities/pedido.entity";
import { ProdutoEntity } from "src/modules/produtos/entities/produto.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
 
} from "typeorm";

@Entity({ name: "pedidos_produtos" })
export class PedidoProdutoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "preco", nullable: false })
  preco: number;

  @Column({ name: "quantidade", nullable: false })
  quantidade: number;

  @ManyToOne(() => PedidoEntity, pedido => pedido.pedidoProdutos)
  @JoinColumn({ name: 'pedido_id' })
  pedido: PedidoEntity;

  @ManyToOne(() => ProdutoEntity, produto => produto.pedidoProdutos)
  @JoinColumn({ name: 'produto_id' })
  produto: ProdutoEntity;
    nomeProduto: string;

}

