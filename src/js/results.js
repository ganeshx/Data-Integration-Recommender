import { managedMatrix } from './constants';

const clientEmail = 'clientEmail';

const getResults = (answers) => {
  let score = {
    fivetran: 0,
    stitch: 0,
    matillion: 0,
    attunity: 0,
    HVR: 0,
  };

  for (const question in answers) {
    if (question != clientEmail) {
      for (const technology in managedMatrix[question]) {
        const ans = answers[question];
        score[technology] += managedMatrix[question][technology][ans];
      }
    }
  }

  return score;
};

export { getResults };
