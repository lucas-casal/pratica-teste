import app from '../src/index';
import supertest from 'supertest';

describe("POST /fruits", () => {
  it("given a valid task it should return 201", async () => {
    const fruit = {
      name: 'banana',
      price: '4000'
    }
    const result = await supertest(app).post('/fruits').send(fruit)
    const status = result.status;
    expect(status).toEqual(201)
  })
    it("given an already included value should return 409", async () => {
      const fruit = {
        name: 'banana',
        price: '4000'
      }
      await supertest(app).post('/fruits').send(fruit)

      const result = await supertest(app).post('/fruits').send(fruit)
      const status = result.status;
      expect(status).toEqual(409)
  });

  it("given an invalid task it should return 422", async () => {
    const fruit = {
      name: 'banana',
      price: 'ascas'
    }
    await supertest(app).post('/fruits').send(fruit)

    const result = await supertest(app).post('/fruits').send(fruit)
    const status = result.status;
    expect(status).toEqual(422)
  });

});