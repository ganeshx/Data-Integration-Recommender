import { questions } from './questions';
import * as Survey from 'survey-jquery';
import 'survey-jquery/survey.min.css';

const init = () => {
  var defaultThemeColors = Survey.StylesManager.ThemeColors['bootstrap'];
  // defaultThemeColors['$main-color'] = '#7ff07f';
  // defaultThemeColors['$main-hover-color'] = '#6fe06f';
  // defaultThemeColors['$text-color'] = '#4a4a4a';
  // defaultThemeColors['$header-color'] = '#7ff07f';

  // defaultThemeColors['$header-background-color'] = '#4a4a4a';
  // defaultThemeColors['$body-container-background-color'] = '#f8f8f8';
  Survey.StylesManager.applyTheme();
  const survey = new Survey.Model(questions);
  $('#surveyContainer').Survey({
    model: survey,
  });
};

export { init };
