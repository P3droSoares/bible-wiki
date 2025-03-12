test("GET to api/v1/health should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.services.database.version).toEqual("17.3");
  expect(responseBody.services.database.max_connections).toBe(100);
  expect(responseBody.services.database.opened_connections).toBe(1);
});
