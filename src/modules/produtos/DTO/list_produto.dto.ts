import { CategoriaEntity } from "src/modules/categorias/entities/categoria.entity";

export class ProdutoDTO {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  categoria: CategoriaDTO;

  constructor(id: string, nome: string, preco: number, quantidade: number, categoria: CategoriaEntity) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoria = new CategoriaDTO(categoria.id, categoria.nome);
  }
}

export class CategoriaDTO {
  id: string;
  nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}