import { PartialType } from '@nestjs/mapped-types';
import { CreateTriajeDto } from './create-triaje.dto';

export class UpdateTriajeDto extends PartialType(CreateTriajeDto) {}
