import { Test, TestingModule } from '@nestjs/testing';
import { LogOutService } from './log-out.service';

describe('LogOutService', () => {
  let service: LogOutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogOutService],
    }).compile();

    service = module.get<LogOutService>(LogOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
