import { PedidoProdutoEntity } from "src/modules/pedidos_produtos/entities/pedido_produto.entity";
import { PedidoEntity } from "../entities/pedido.entity";


export class PedidoDTO {
  id: string;
  horario: string;
  endereco: string;
  clienteNome: string; // Nome do cliente
  pedidoProdutos: PedidoProdutoDTO[]; // Produtos do pedido

  constructor(pedido: PedidoEntity) {
    this.id = pedido.id;
    this.horario = pedido.horario;
    this.endereco = pedido.endereco;
    this.clienteNome = pedido.cliente.nome;
    this.pedidoProdutos = pedido.pedidoProdutos.map(pp => new PedidoProdutoDTO(pp));
  }
}

export class PedidoProdutoDTO {
  id: string;
  nomeProduto: string; // Nome do produto
  quantidade: number;

  constructor(pedidoProduto: PedidoProdutoEntity) {
    this.id = pedidoProduto.id;
    this.nomeProduto = pedidoProduto.nomeProduto; // Substitua por como você armazena o nome do produto na entidade
    this.quantidade = pedidoProduto.quantidade;
  }
}
