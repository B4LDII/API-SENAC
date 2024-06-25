

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { UpdatePedidoDTO } from './DTO/update_pedido.dto';


@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoEntity)
    
    private pedidoRepository: Repository<PedidoEntity>,
  ) {}

  async findAll() : Promise<PedidoEntity[]> {
    return this.pedidoRepository.find({ relations: ['pedidoProdutos', 'cliente'] });
  } 

  async createPedido(pedidoData) {
    const novoPedido = this.pedidoRepository.create(pedidoData);
    return this.pedidoRepository.save(novoPedido);
  }

  async updatePedido(id: string, pedido: UpdatePedidoDTO) {
    const pedidoFinded = await this.pedidoRepository.findOneBy({ id });
    if (pedidoFinded == null) {
      throw new NotFoundException("Pedido não foi encontrado!");
    }
    await this.pedidoRepository.update(id, pedido);
  }

  async deletePedido(id: string) {
    await this.pedidoRepository.delete(id);
  }
}
