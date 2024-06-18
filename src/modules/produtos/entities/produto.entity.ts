import { CategoriaEntity } from "src/modules/categorias/entities/categoria.entity";
import { PedidoProdutoEntity } from "src/modules/pedidos_produtos/entities/pedido_produto.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity({ name: "produtos" })
export class ProdutoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @Column({ name: "preco", nullable: false })
  preco: number;

  @Column({ name: "quantidade", nullable: false })
  quantidade: number;

  @ManyToOne(() => CategoriaEntity, categoria => categoria.produtos)
  @JoinColumn({ name: 'categoria_id' })
  categoria: CategoriaEntity;

  @OneToMany(() => PedidoProdutoEntity, pedidoProduto => pedidoProduto.produto)
  pedidoProdutos: PedidoProdutoEntity[];
}

