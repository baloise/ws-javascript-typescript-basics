import { sum } from "./sum.util";

describe("sum", () => {
  test("should return the sum of numbers", () => {
    expect(sum([])).toBe(0);
    expect(sum([1, 2])).toBe(3);
    expect(sum([0, 2])).toBe(2);
    expect(sum([-1, 2])).toBe(1);
  });
});
