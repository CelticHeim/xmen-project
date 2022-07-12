import { AllowedValuesSchema } from "../../lib";

export const fragmentedDnaSequences = (dnaSequences) => {
  const arrayFragSeq = dnaSequences.map((element) => {
    let fragSeq = [];

    for (let index = 0; index < element.length; index++) {
      fragSeq.push(element.charAt(index));
    }
    return fragSeq;
  });

  // console.log(arrayFragSeq);
  arrayFragSeq.forEach((sequence) => {
    sequence.forEach((element) => {
      AllowedValuesSchema.parse(element);
    });
  });

  return arrayFragSeq;
}