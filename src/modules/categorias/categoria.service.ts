import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaEntity } from "./entities/categoria.entity";
import { Repository } from "typeorm";
import { CreateCategoriasDTO } from "./DTO/create_categorias.dto";

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaEntity)
    private categoriaRepository: Repository<CategoriaEntity>,
  ) {}
  
  async createCategoria(categoriaData: CreateCategoriasDTO){
    const novoCategoria = this.categoriaRepository.create(categoriaData);
    return this.categoriaRepository.save(novoCategoria);
  }
  
}