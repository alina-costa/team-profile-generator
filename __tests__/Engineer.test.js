// const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test("creates a new engineer", () => {
  const engineer = new Engineer("Dan", 1234, "dan@email.com", "github-dan");
  expect(engineer.name).toBe("Dan");
  expect(engineer.id).toEqual(expect.any(Number));
});
