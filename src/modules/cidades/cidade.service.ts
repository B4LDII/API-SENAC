
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CidadeEntity } from './entities/cidade.entity';



@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(CidadeEntity)
    private cidadeRepository: Repository<CidadeEntity>,
  ) {}
  
  async createCidade(cidadeteData){
    const novoCidade = this.cidadeRepository.create(cidadeteData);
    return this.cidadeRepository.save(novoCidade);
  }

}
