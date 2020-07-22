const getQuestions = (surveyId) => {
  if (surveyId === 'dataReplication') return dataReplication;
};
const dataReplication = {
  title: 'Data Replication Tools',
  completedHtml: '<div id="recommendation"></div>',
  pages: [
    {
      name: 'managed1',
      elements: [
        {
          type: 'radiogroup',
          name: 'question1',
          title: 'Do you prefer on-premises or cloud-hosted solutions?',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'On Prem',
            },
            {
              value: 'item2',
              text: 'Cloud',
            },
            {
              value: 'item3',
              text: 'No preference',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question2',
          title: 'Do you have cloud data sources (Google Analytics, Facebook/Linkedin/etc Ads, Salesforce)',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'Yes',
            },
            {
              value: 'item2',
              text: 'No',
            },
            {
              value: 'item3',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question3',
          title: 'Do you have any SAP data sources? ',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'Yes',
            },
            {
              value: 'item2',
              text: 'No',
            },
            {
              value: 'item3',
              text: 'Not Sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question4',
          title:
            'Do you prefer to manage software upgrades yourself or would you prefer a solution that requires no infrastructure management?',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'Manage myself',
            },
            {
              value: 'item2',
              text: 'No management',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question5',
          title:
            'Would you rather pay more for a better experience or get the lowest possible price and fill the gaps with manual work?',
          choices: [
            {
              value: 'item1',
              text: 'Best experience',
            },
            {
              value: 'item2',
              text: 'Lowest price',
            },
            {
              value: 'item3',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question6',
          title: 'Are you willing to make a long term commitment?',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'Yeah, 2+ years is fine',
            },
            {
              value: 'item2',
              text: 'Maybe 12 months after a trial',
            },
            {
              value: 'item3',
              text: 'No, month to month please',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question7',
          title:
            'Would you prefer a tool that requires additional training and professional services or a tool that is ready to use day 1 with minimal training?',
          choices: [
            {
              value: 'item1',
              text: 'Simple is better!',
            },
            {
              value: 'item2',
              text: "I'd like a solution that needs a little training and PS",
            },
            {
              value: 'item3',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question8',
          title: 'How important is good documentation to you?',
          choices: [
            {
              value: 'item1',
              text: 'I expect great and up to date documentation!',
            },
            {
              value: 'item2',
              text: "Docs aren't my biggest concern as long as the tool works and I can call someone when it doesn't.",
            },
            {
              value: 'item3',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question9',
          title: 'Do you need data transformation functionality in your Extract/Load tool?',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'Sure do!',
            },
            {
              value: 'item2',
              text: "It doesn't really matter.",
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question10',
          title: 'Do you need a tool that can support custom data sources (REST API sources, for example)',
          isRequired: true,
          choices: [
            {
              value: 'item1',
              text: 'Sure do!',
            },
            {
              value: 'item2',
              text: 'No, I have plenty data engineers or contractors for that.',
            },
            {
              value: 'item3',
              text: "It doesn't really matter.",
            },
          ],
        },
      ],
    },
    {
      name: 'email',
      elements: [
        {
          type: 'text',
          name: 'clientEmail',
          title: 'Your email',
          isRequired: true,
          requiredErrorText: 'Please enter your email address to see the Recommendation',
          validators: [
            {
              type: 'email',
            },
          ],
          inputType: 'email',
          size: 40,
          maxLength: 300,
        },
      ],
      title: 'Contact Information',
    },
  ],
  showProgressBar: 'top',
  progressBarType: 'questions',
  checkErrorsMode: 'onComplete',
};

export { getQuestions };
