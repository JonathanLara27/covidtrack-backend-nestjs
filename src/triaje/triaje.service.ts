import { Injectable } from '@nestjs/common';
import { CreateTriajeDto } from './dto/create-triaje.dto';
import { UpdateTriajeDto } from './dto/update-triaje.dto';

@Injectable()
export class TriajeService {
  create(createTriajeDto: CreateTriajeDto) {
    return 'This action adds a new triaje';
  }

  findAll() {
    return `This action returns all triaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} triaje`;
  }

  update(id: number, updateTriajeDto: UpdateTriajeDto) {
    return `This action updates a #${id} triaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} triaje`;
  }
}
