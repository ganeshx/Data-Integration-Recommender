import { renderSurvey } from './survey';
import { getUrlVars } from './helper';
import { allSurveys } from './constants';

const queryParams = getUrlVars();
const init = () => {
  queryParams['survey'] ? renderSurvey(queryParams['survey']) : renderHome();
};

const renderHome = () => {
  const card = ({ name, description, id }) => `

  <div class="card " style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">
    ${description}  </p>
    <button id="${id}" class="btn btn-primary">Take the Quiz</button>
  </div>
</div>
`;

  $('#surveyContainer').html(allSurveys.map(card).join(''));
};

$(document).ready(function () {
  if (!queryParams['survey']) {
    allSurveys.map((survey) => {
      document.getElementById(survey.id).addEventListener('click', () => {
        window.location.href = window.location.href + '?survey=' + survey.id;
      });
    });
  }
});
export { init };
