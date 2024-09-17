import { Test, TestingModule } from '@nestjs/testing';
import { VerifySessionController } from './verify-session.controller';

describe('VerifySessionController', () => {
  let controller: VerifySessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerifySessionController],
    }).compile();

    controller = module.get<VerifySessionController>(VerifySessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
