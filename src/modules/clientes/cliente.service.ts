
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteEntity } from './entities/cliente.entity';


@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}
  
  async createCliente(clienteData) {
    const novoCliente = this.clienteRepository.create(clienteData);
    return this.clienteRepository.save(novoCliente);
  }

}
