import { getQuestions } from './questions';
import * as Survey from 'survey-jquery';
import { getResults } from './results';
import 'survey-jquery/survey.min.css';

const renderSurvey = (surveyId) => {
  // document.location = document.location.href + '?success=yes';
  let defaultThemeColors = Survey.StylesManager.ThemeColors['bootstrap'];
  // defaultThemeColors['$main-color'] = '#7ff07f';
  // defaultThemeColors['$main-hover-color'] = '#6fe06f';
  // defaultThemeColors['$text-color'] = '#4a4a4a';
  // defaultThemeColors['$header-color'] = '#7ff07f';

  // defaultThemeColors['$header-background-color'] = '#4a4a4a';
  // defaultThemeColors['$body-container-background-color'] = '#f8f8f8';
  Survey.StylesManager.applyTheme();
  const survey = new Survey.Model(getQuestions(surveyId));

  survey.onComplete.add(function (result) {
    const rankedResult = getResults(result.data);

    const template = ` 
    <h3> Recommended Technology Based on Your Answers </h3>
    <div class="row justify-content-center">
        <div class="table-width">
            <table class="table">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>`;

    $('#recommendation').html(template);

    const table = ({ rank, technology }) => `
        <tr>
            <td>${rank}</td>
            <td>${technology}</td>
        </tr>
        `;
    $('table tbody').append(rankedResult.map(table).join(''));

    $(document).ready(function () {
      $('table tbody tr').first().addClass('table-success recommended');
    });
  });

  $('#surveyContainer').Survey({
    model: survey,
  });
};
export { renderSurvey };
