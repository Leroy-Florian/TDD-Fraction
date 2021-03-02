export function AdditionOfFraction(fraction1: Fraction, fraction2: Fraction): object {
  let resultNumerator, resultDenominator;

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

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function reduceFraction(resultFraction: Fraction) {
  let pgcd = gcd(resultFraction.numerator, resultFraction.denominator);
  return {
    numerator: resultFraction.numerator / pgcd,
    denominator: resultFraction.denominator / pgcd
  };
}

interface Fraction {
  numerator: number;
  denominator: number;
}}