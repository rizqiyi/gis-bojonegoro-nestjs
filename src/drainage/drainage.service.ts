import { Injectable } from '@nestjs/common';
import { CreateDrainageDto } from './dto/create-drainage.dto';
import { UpdateDrainageDto } from './dto/update-drainage.dto';

@Injectable()
export class DrainageService {
  create(createDrainageDto: CreateDrainageDto) {
    return 'This action adds a new drainage';
  }

  findAll() {
    return `This action returns all drainage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drainage`;
  }

  update(id: number, updateDrainageDto: UpdateDrainageDto) {
    return `This action updates a #${id} drainage`;
  }

  remove(id: number) {
    return `This action removes a #${id} drainage`;
  }
}
