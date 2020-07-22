import { replicationMatrix } from './constants';

const clientEmail = 'clientEmail';

const compare = (a, b) => {
  let comparison = 0;
  if (a.rank > b.rank) {
    comparison = 1;
  } else if (a.rank < b.rank) {
    comparison = -1;
  }
  return comparison * -1;
};

const jsUcfirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getResults = (answers) => {
  let result = [];
  let score = {
    fivetran: 0,
    stitch: 0,
    matillion: 0,
    attunity: 0,
    HVR: 0,
  };

  for (const question in answers) {
    if (question != clientEmail) {
      for (const technology in replicationMatrix[question]) {
        const ans = answers[question];
        score[technology] += replicationMatrix[question][technology][ans];
      }
    }
  }

  for (let item in score) {
    result.push({ rank: score[item], technology: jsUcfirst(item) });
  }
  result.sort(compare);
  return result;
};

export { getResults };
