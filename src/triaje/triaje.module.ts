import { Module } from '@nestjs/common';
import { TriajeService } from './triaje.service';
import { TriajeController } from './triaje.controller';

@Module({
  controllers: [TriajeController],
  providers: [TriajeService],
})
export class TriajeModule {}
