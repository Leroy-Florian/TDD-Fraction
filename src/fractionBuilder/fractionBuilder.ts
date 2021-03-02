export class fractionBuilder {
  static MakeFraction(numerator: number, denominator: number): Fraction {

    if (denominator == 0) throw new Error("Impossible");

    return {
      numerator: numerator,
      denominator: denominator
    };
  }
}



