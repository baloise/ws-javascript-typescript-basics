import { currency } from "./currency.util";

describe("currency", () => {
  test("should add two decimals and the currency prefix", () => {
    expect(currency(0)).toBe("CHF 0.00");
    expect(currency(10)).toBe("CHF 10.00");
    expect(currency(10.99)).toBe("CHF 10.99");
    expect(currency(10.0)).toBe("CHF 10.00");
  });
});
