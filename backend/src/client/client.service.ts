import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientRepository.create(createClientDto);
    return this.clientRepository.save(client);
  }

  async findAll(
    page = 1,
    limit = 10,
    sortBy?: string,
    sortOrder: 'ASC' | 'DESC' = 'DESC',
    category?: string
  ): Promise<[Client[], number]> {
    const query = this.clientRepository
      .createQueryBuilder('client')
      .skip((page - 1) * limit)
      .take(limit);

    if (category) {
      query.andWhere('client.category = :category', { category });
    }

    if (sortBy) {
      query.orderBy(`client.${sortBy}`, sortOrder);
    }

    return query.getManyAndCount();
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientRepository.findOneBy({ id });
    if (!client) throw new NotFoundException(`Client ${id} not found`);
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.findOne(id);
    return this.clientRepository.save({ ...client, ...updateClientDto });
  }

  async remove(id: number): Promise<void> {
    const client = await this.findOne(id);
    await this.clientRepository.remove(client);
  }
}