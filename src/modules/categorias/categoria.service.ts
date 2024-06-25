import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaEntity } from "./entities/categoria.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaEntity)
    private categoriaRepository: Repository<CategoriaEntity>,
  ) {}
  
  async createCategoria(categoriateData){
    const novoCategoria = this.categoriaRepository.create(categoriateData);
    return this.categoriaRepository.save(novoCategoria);
  }
  
}