// const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test("creates a new engineer", () => {
  const engineer = new Engineer("Dan", 1234, "dan@email.com", "github-dan");
  expect(engineer.name).toBe("Dan");
  // expect(engineer.id).toBe(1234);
  // expect(engineer.email).toBe("dan@email.com");
  // expect(engineer.github).toBe("github-dan");
});
