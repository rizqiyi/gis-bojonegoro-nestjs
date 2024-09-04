import { Test, TestingModule } from '@nestjs/testing';
import { DrainageService } from './drainage.service';

describe('DrainageService', () => {
  let service: DrainageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrainageService],
    }).compile();

    service = module.get<DrainageService>(DrainageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
