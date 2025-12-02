const { suma } = require("../src/app");

test("la función suma debe sumar correctamente", () => {
  expect(suma(2, 3)).toBe(5);
});
