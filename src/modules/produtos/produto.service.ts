// src/produto/produto.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async findAll(): Promise<ProdutoEntity[]> {
    return this.produtoRepository.find();
  }

  // async findOne(id: string): Promise<ProdutoEntity> {
  //   const produto = await this.produtoRepository.findOne(id);
  //   if (!produto) {
  //     throw new NotFoundException(`Produto com ID '${id}' não encontrado`);
  //   }
  //   return produto;
  // }
  
  async create(produtoData: ProdutoEntity): Promise<ProdutoEntity> {
    const novoProduto = this.produtoRepository.create(produtoData);
    return this.produtoRepository.save(novoProduto);
  }

  // async update(id: string, produtoData: ProdutoEntity): Promise<ProdutoEntity> {
  //   await this.produtoRepository.update(id, produtoData);
  //   return this.findOne(id);
  // }

  async delete(id: string): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
