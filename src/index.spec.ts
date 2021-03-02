import { calculWithFraction } from ".";

describe("Same Denominator", function() {
  it("should return a string 3/4", function() {
    expect(new calculWithFraction({ numerator: 1, denominator: 4 }, {
      numerator: 2,
      denominator: 4
    }).addition()).toEqual({ numerator: 3, denominator: 4 });
  });
  it("should return a string 2/3", function() {
    expect(new calculWithFraction({ numerator: 1, denominator: 3 }, {
      numerator: 1,
      denominator: 3
    }).addition()).toEqual({ numerator: 2, denominator: 3 });
  });
});

describe("Different Denominator", function() {
  it("should return a string 4/4", function() {
    expect(new calculWithFraction({ numerator: 1, denominator: 2 }, {
      numerator: 2,
      denominator: 4
    }).addition()).toEqual({ numerator: 1, denominator: 1 });
  });
  it("should return a string 36/64", function() {
    expect(new calculWithFraction( { numerator: 1, denominator: 16 }, {
      numerator: 2,
      denominator: 4
    }).addition()).toEqual({ numerator: 9, denominator: 16 });
  });
});

describe("Different Denominator", function() {
  it("should return a string 4/4", function() {
    expect(new calculWithFraction({ numerator: 1, denominator: 2 }, {
      numerator: 2,
      denominator: 4
    }).addition()).toEqual({ numerator: 1, denominator: 1 });
  });
});