import { Test, TestingModule } from '@nestjs/testing';
import { TriajeService } from './triaje.service';

describe('TriajeService', () => {
  let service: TriajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TriajeService],
    }).compile();

    service = module.get<TriajeService>(TriajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
