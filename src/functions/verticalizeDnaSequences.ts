export const verticalizeDnaSequences = (fragDnaSeq) => {
  let verDnaSequences = [], index = 0;

  do {
    const arrayFragSeqRev = fragDnaSeq.map((element) => {
      return element[index];
    });
    verDnaSequences.push(arrayFragSeqRev);
    index++;
  } while (index < fragDnaSeq.length);
  return verDnaSequences;
}