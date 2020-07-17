const questions = {
  title: 'Managed Extract/Load Tools',
  pages: [
    {
      name: 'managed1',
      elements: [
        {
          type: 'radiogroup',
          name: 'question1',
          title: 'Do you prefer on-premises or cloud-hosted solutions?',
          choices: [
            {
              value: 'prem',
              text: 'On Prem',
            },
            {
              value: 'cloud',
              text: 'Cloud',
            },
            {
              value: 'equal',
              text: 'No preference',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question3',
          title: 'Do you have cloud data sources (Google Analytics, Facebook/Linkedin/etc Ads, Salesforce)',
          choices: [
            {
              value: 'yes',
              text: 'Yes',
            },
            {
              value: 'no',
              text: 'No',
            },
            {
              value: 'equal',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question2',
          title: 'Do you have any SAP data sources? ',
          choices: [
            {
              value: 'yes',
              text: 'On Prem',
            },
            {
              value: 'no',
              text: 'Cloud',
            },
            {
              value: 'equal',
              text: 'No preference',
            },
          ],
        },
      ],
    },
    {
      name: 'managed2',
      elements: [
        {
          type: 'radiogroup',
          name: 'question4',
          title:
            'Do you prefer to manage software upgrades yourself or would you prefer a solution that requires no infrastructure management?',
          choices: [
            {
              value: 'myself',
              text: 'Manage myself',
            },
            {
              value: 'no',
              text: 'No management',
            },
          ],
          otherText: 'No management',
        },
        {
          type: 'radiogroup',
          name: 'question5',
          title:
            'Would you rather pay more for a better experience or get the lowest possible price and fill the gaps with manual work?',
          choices: [
            {
              value: 'experience',
              text: 'Best experience',
            },
            {
              value: 'price',
              text: 'Lowest price',
            },
            {
              value: 'equal',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question6',
          title: 'Are you willing to make a long term commitment?',
          choices: [
            {
              value: 'years',
              text: 'Yeah, 2+ years is fine',
            },
            {
              value: 'months',
              text: 'Maybe 12 months after a trial',
            },
            {
              value: 'm2m',
              text: 'No, month to month please',
            },
          ],
        },
      ],
    },
    {
      name: 'managed3',
      elements: [
        {
          type: 'radiogroup',
          name: 'question7',
          title:
            'Would you prefer a tool that requires additional training and professional services or a tool that is ready to use day 1 with minimal training?',
          choices: [
            {
              value: 'simple',
              text: 'Simple is better!',
            },
            {
              value: 'training',
              text: "I'd like a solution that needs a little training and PS",
            },
            {
              value: 'equal',
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
              value: 'doc',
              text: 'I expect great and up to date documentation!',
            },
            {
              value: 'nodoc',
              text: "Docs aren't my biggest concern as long as the tool works and I can call someone when it doesn't.",
            },
            {
              value: 'equal',
              text: 'Not sure',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question9',
          title: 'Do you need data transformation functionality in your Extract/Load tool?',
          choices: [
            {
              value: 'sure',
              text: 'Sure do!',
            },
            {
              value: 'equal',
              text: "It doesn't really matter.",
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question10',
          title: 'Do you need a tool that can support custom data sources (REST API sources, for example)',
          choices: [
            {
              value: 'sure',
              text: 'Sure do!',
            },
            {
              value: 'no',
              text: 'No, I have plenty data engineers or contractors for that.',
            },
            {
              value: 'equal',
              text: "It doesn't really matter.",
            },
          ],
        },
      ],
    },
  ],
  showProgressBar: 'top',
};

export { questions };
