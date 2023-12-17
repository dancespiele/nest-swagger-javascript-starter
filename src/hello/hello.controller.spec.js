import { Test } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('HelloController', () => {
  let app;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const helloController = app.get(HelloController);
      expect(helloController.getHello()).toBe('Hello World!');
    });
  });
});
