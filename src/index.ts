import { fractionBuilder } from "./fractionBuilder/fractionBuilder";
import { gcd, reduceFraction } from "./tools/tools";

let resultNumerator, resultDenominator;

export class calculWithFraction {
  private readonly Fraction1: Fraction;
  private readonly Fraction2: Fraction;

  constructor(Fraction1: Fraction, Fraction2: Fraction) {
    try {
      this.Fraction1 = fractionBuilder.MakeFraction(Fraction1.numerator, Fraction1.denominator);
    } catch (e) {
      console.error(e);
    }
    try {
      this.Fraction2 = fractionBuilder.MakeFraction(Fraction2.numerator, Fraction2.denominator);
    } catch (e) {
      console.error(e);
    }
  }

  addition() {
    if (this.Fraction1["denominator"] != this.Fraction2["denominator"]) {
      let multipleNumerator1 = this.Fraction1["numerator"] * this.Fraction2["denominator"];
      let multipleNumerator2 = this.Fraction2["numerator"] * this.Fraction1["denominator"];

      resultNumerator = multipleNumerator1 + multipleNumerator2;
      resultDenominator = this.Fraction2["denominator"] * this.Fraction1["denominator"];

    } else {
      resultNumerator = this.Fraction1["numerator"] + this.Fraction2["numerator"];
      resultDenominator = this.Fraction1["denominator"];
    }

    return reduceFraction({
      numerator: resultNumerator,
      denominator: resultDenominator
    });
  }
}





