

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './entities/produto.entity';
import { UpdateProdutoDTO } from './DTO/update_produto.DTO';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async findAll() : Promise<ProdutoEntity[]> {
    return this.produtoRepository.find({ relations: ['categoria'] });
  }

  async createProduto(produtoData) {
    const novoProduto = this.produtoRepository.create(produtoData);
    return this.produtoRepository.save(novoProduto);
  }
  async updateProduto(id: string, produto: UpdateProdutoDTO) {
    const produtoFinded = await this.produtoRepository.findOneBy({ id });
    if (produtoFinded == null) {
      throw new NotFoundException("Produto não foi encontrado!");
    }
    await this.produtoRepository.update(id, produto);
  }

  async deleteProduto(id: string) {
    await this.produtoRepository.delete(id);
  }

}