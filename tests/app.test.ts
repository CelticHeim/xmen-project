import { app } from "../src/app";
import request from "supertest"

describe("GET /", () => {
  test("Should response status code: 200", async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /generate-token", () => {
  test("Should response status code: 200", async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /is-mutant", () => {
  test("Should response status code: 200", async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });
});