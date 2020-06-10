const colorMap = {
  blue: '#1F77B4',
  gray: '#7F7F7F',
  lightGray: 'rgba(0,0,0,0.5)',
  lightGrayOpacity: 'rgb(211, 211, 211, 0.1)',
  lightGrayBorder: 'rgb(211, 211, 211, 1)',
  orange: '#FF7F0E',
  lighterBlue: '#9edae5',
  red: '#D62728',
  purple: '#9467BD',
  lightPurple: '#c5b0d5',
  brown: '#8C564B',
  lightBrown: '#c49c94',
  skyblue: '#CFECF9',
  yellow: '#ffed6f',
  yellowGreen: '#BCBD22',
  teal: '#17BECF',
  lightYellow: '#dbdb8d',
  pink: '#f7b6d2',
  lightPink: '#ff9896',
  lightgreen: '#98df8a',
  peach: '#ffbb78',
  lightBlue: '#aec7e8',
};

export const COLORS = {
  roleNode: colorMap.lightBlue,
  userNode: colorMap.lightgreen,
  edge: colorMap.lightGrayOpacity,
  parentEdge: colorMap.purple,
  childEdge: colorMap.brown,
  childSelectedBackground: colorMap.lightBrown,
  parentSelectedBackground: colorMap.purple,
  childSelectedBorder: colorMap.peach,
  parentSelectedBorder: colorMap.peach,
  hover: colorMap.lightBrown,
  hoverBorder: colorMap.peach,
  highlight: colorMap.yellow,
  edgeHighlight: colorMap.brown,
  nodeShadow: colorMap.lightGray,
  nodeBorder: colorMap.lightGrayBorder,
};
