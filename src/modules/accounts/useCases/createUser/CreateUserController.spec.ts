import 'reflect-metadata';
import { app } from '../../../../shared/infra/http/app';

import request from 'supertest';

describe('Create user controller', () => {
  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      firstName: 'Teste',
      lastName: 'User',
      email: 'teste@teste.com',
      dateOfBirth: '01/01/1969',
      document: '11111111111',
      password: 'teste123'
    });

    expect(response.status).toBe(201);
  });

  it('Should not be able to create a user with an already registered email!', async () => {
    const response = await request(app).post('/users').send({
      firstName: 'Teste',
      lastName: 'User',
      email: 'teste@teste.com',
      dateOfBirth: '01/01/1969',
      document: '11111111112',
      password: 'teste123'
    });

    expect(response.status).toBe(400);
  });

  it('Should not be able to create a user with an already registered document!', async () => {
    const response = await request(app).post('/users').send({
      firstName: 'Teste',
      lastName: 'User',
      email: 'teste2@teste.com',
      dateOfBirth: '01/01/1969',
      document: '11111111111',
      password: 'teste123'
    });

    expect(response.status).toBe(400);
  });
});
