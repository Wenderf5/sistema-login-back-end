import { Test, TestingModule } from '@nestjs/testing';
import { VerifySessionService } from './verify-session.service';

describe('VerifySessionService', () => {
  let service: VerifySessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifySessionService],
    }).compile();

    service = module.get<VerifySessionService>(VerifySessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
