import { fractionBuilder } from "./fractionBuilder";

describe("Create A fraction", function() {
  it("should return an object of type Fraction  9/16", function() {
    expect(fractionBuilder.MakeFraction(9, 16)
    ).toEqual({ numerator: 9, denominator: 16 });
  });

  it("should return an object of type Fraction  12/6", function() {
    expect(fractionBuilder.MakeFraction(12, 6)
    ).toEqual({ numerator: 12, denominator: 6 });
  });
});

describe("...But denominator = 0 is impossible", function() {
  it("should return an error", function() {
    expect(() => fractionBuilder.MakeFraction(9, 0)).toThrow();
  });
});