
import { ProdutoEntity } from "src/modules/produtos/entities/produto.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

@Entity({ name: "categorias" })
export class CategoriaEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @OneToMany(() => ProdutoEntity, produto => produto.categoria)
  produtos: ProdutoEntity[];

}
