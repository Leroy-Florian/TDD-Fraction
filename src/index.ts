import { fractionBuilder } from "./fractionBuilder/fractionBuilder"

let resultNumerator, resultDenominator;

export class calculWithFraction {
  private v1: Error | { numerator: number; denominator: number };
  private v2: Error | { numerator: number; denominator: number };

  constructor(v1: Fraction, v2: Fraction) {
    this.v1 = fractionBuilder.MakeFraction(v1.numerator, v1.denominator);
    this.v2 = fractionBuilder.MakeFraction(v2.numerator, v2.denominator);
  }


   addition() {

   if (this.v1["denominator"] != this.v2["denominator"]) {
      let multipleNumerator1 = this.v1["numerator"] * this.v2["denominator"];
      let multipleNumerator2 = this.v2["numerator"] * this.v1["denominator"];

      resultNumerator = multipleNumerator1 + multipleNumerator2;
      resultDenominator = this.v2["denominator"] * this.v1["denominator"];

    } else {
      resultNumerator = this.v1["numerator"] + this.v2["numerator"];
      resultDenominator = this.v1["denominator"];
    }

    return reduceFraction({
      numerator: resultNumerator,
      denominator: resultDenominator
    });
  }

}


function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function reduceFraction(resultFraction: Fraction)  {
  let pgcd = gcd(resultFraction.numerator, resultFraction.denominator);
  return {
    numerator: resultFraction.numerator / pgcd,
    denominator: resultFraction.denominator / pgcd
  };
}






