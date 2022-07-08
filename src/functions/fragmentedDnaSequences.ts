export const fragmentedDnaSequences = (dnaSequences) => {
  const arrayFragSeq = dnaSequences.map((element) => {
    let fragSeq = [];

    for (let index = 0; index < element.length; index++) {
      fragSeq.push(element.charAt(index));
    }
    return fragSeq;
  });
  return arrayFragSeq;
}