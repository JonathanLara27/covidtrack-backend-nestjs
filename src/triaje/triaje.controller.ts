import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TriajeService } from './triaje.service';
import { CreateTriajeDto } from './dto/create-triaje.dto';
import { UpdateTriajeDto } from './dto/update-triaje.dto';

@Controller('triaje')
export class TriajeController {
  constructor(private readonly triajeService: TriajeService) {}

  @Post()
  create(@Body() createTriajeDto: CreateTriajeDto) {
    return this.triajeService.create(createTriajeDto);
  }

  @Get()
  findAll() {
    return this.triajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.triajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTriajeDto: UpdateTriajeDto) {
    return this.triajeService.update(+id, updateTriajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.triajeService.remove(+id);
  }
}
