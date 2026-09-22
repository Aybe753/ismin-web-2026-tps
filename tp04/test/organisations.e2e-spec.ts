import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';
import { ModelsService } from '../src/models/models.service.js';

/**
 * Given, and green from the start: the organisations API is provided.
 * Read it as an example: a public read, a protected write, a 409.
 */
describe('/organisations API', () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();

    const login = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'bob', password: 'secret' })
      .expect(200);
    token = login.body.access_token as string;
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await app.get(ModelsService).clear();
  });

  it('lists the organisations, without a token', async () => {
    await request(app.getHttpServer())
      .post('/organisations')
      .set('Authorization', `Bearer ${token}`)
      .send({ slug: 'mistralai', name: 'Mistral AI', country: 'FR' })
      .expect(201);

    const response = await request(app.getHttpServer()).get('/organisations').expect(200);
    expect(response.body).toEqual([{ slug: 'mistralai', name: 'Mistral AI', country: 'FR' }]);
  });

  it('rejects a creation without a token', async () => {
    await request(app.getHttpServer())
      .post('/organisations')
      .send({ slug: 'mistralai', name: 'Mistral AI' })
      .expect(401);
  });

  it('refuses a slug that is already taken', async () => {
    const organisation = { slug: 'openai', name: 'OpenAI', country: 'US' };
    await request(app.getHttpServer()).post('/organisations').set('Authorization', `Bearer ${token}`).send(organisation).expect(201);
    await request(app.getHttpServer()).post('/organisations').set('Authorization', `Bearer ${token}`).send(organisation).expect(409);
  });

  it('refuses a slug that is not a lowercase slug', async () => {
    await request(app.getHttpServer())
      .post('/organisations')
      .set('Authorization', `Bearer ${token}`)
      .send({ slug: 'Mistral AI', name: 'Mistral AI' })
      .expect(400);
  });
});
