import { Test, TestingModule } from '@nestjs/testing';
import { TriajeController } from './triaje.controller';
import { TriajeService } from './triaje.service';

describe('TriajeController', () => {
  let controller: TriajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TriajeController],
      providers: [TriajeService],
    }).compile();

    controller = module.get<TriajeController>(TriajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
