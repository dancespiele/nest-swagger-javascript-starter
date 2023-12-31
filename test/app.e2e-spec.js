import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppController } from '../src/hello/hello.controller';
import { AppService } from '../src/hello/hello.service';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET /', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
