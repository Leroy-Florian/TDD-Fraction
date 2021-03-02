export class fractionBuilder {
  static MakeFraction(numerator: number, denominator: number) {

    if (denominator == 0) {
      return new Error();
    }

    return {
      numerator: numerator,
      denominator: denominator
    };
  }
}