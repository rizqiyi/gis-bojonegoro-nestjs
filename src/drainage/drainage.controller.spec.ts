import { Test, TestingModule } from '@nestjs/testing';
import { DrainageController } from './drainage.controller';
import { DrainageService } from './drainage.service';

describe('DrainageController', () => {
  let controller: DrainageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrainageController],
      providers: [DrainageService],
    }).compile();

    controller = module.get<DrainageController>(DrainageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
