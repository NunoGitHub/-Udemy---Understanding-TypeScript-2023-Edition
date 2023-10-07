type Combinable= number | string;
type Conversiondescriptor= "as-number" | "as-text";

function combine(
  n1: Combinable,
  n2: Combinable,
  resultConversion: Conversiondescriptor
) {
  let result;

  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n1;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");

console.log(combinedAges);

console.log(combine("max", "ana", "as-text"));

console.log(combine("50", "50", "as-number"));
