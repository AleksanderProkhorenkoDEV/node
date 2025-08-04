// tests/email.test.ts
import { validateEmail } from "..";

describe("Correct emails", () => {
  it("Only valid emails", () => {
    expect(validateEmail("usuario@dominio.com")).toBe(true);
  });

  it("Deney email without @", () => {
    expect(validateEmail("usuariodominio.com")).toBe(false);
  });

  it("Required string type", () => {
    // @ts-expect-error - Prueba de tipo incorrecto
    expect(validateEmail(12345)).toBe(false);
  });
});
