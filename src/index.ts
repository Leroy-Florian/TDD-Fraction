export class fractionBuilder {
  static MakeFraction(numerator: number, denominator: number) {

    if (denominator == 0) {
      return new Error("impossible");
    }

    return {
      numerator: numerator,
      denominator: denominator
    };
  }
}

let resultNumerator, resultDenominator;

export class calculWithFraction {
  v1 = fractionBuilder.MakeFraction(1, 2);
  v2 = fractionBuilder.MakeFraction(1, 5);


  constructor(v1: Fraction, v2: Fraction) {
    this.v1 = v1;
    this.v2 = v2;
  }

  static addition(fraction1: Fraction, fraction2: Fraction) {
    if (fraction1.denominator != fraction2.denominator) {
      let multipleNumerator1 = fraction1.numerator * fraction2.denominator;
      let multipleNumerator2 = fraction2.numerator * fraction1.denominator;

      resultNumerator = multipleNumerator1 + multipleNumerator2;
      resultDenominator = fraction2.denominator * fraction1.denominator;

    } else {
      resultNumerator = fraction1.numerator + fraction2.numerator;
      resultDenominator = fraction1.denominator;
    }

    return reduceFraction({
      numerator: resultNumerator,
      denominator: resultDenominator
    });
  }

  multiplication(fraction1: Fraction, fraction2: Fraction) {

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






