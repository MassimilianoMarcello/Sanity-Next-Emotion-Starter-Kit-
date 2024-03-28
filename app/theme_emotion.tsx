const fontFace = `
  @font-face {
    font-family: 'Almaq Refined'; 
    src: url('../public/fonts/Almaq Refined.ttf') format('truetype');
    
  }
`;

const theme = {
  colors: {
    platinum: " #b29d6e ",
    platinumText: "#afae7f ",
    yellow:"#feeb64 ",
    bigYellow:'#fdd906',
    azure:"#b0cdff ",
    blueLight: "#277fdd",
    blue: "#254fa9 ",
    blueDark: " #0741a4",
    blueDarker: "#1d3b7a",
    blueDarkerPlus: "#102e58",
    blueDarkest: "#11182d",
    white: "#fefffe",
    black1: "#1b1b1b",
    black2:"#1a1a1a" ,
    blackParagraph:"#333333;",
  },

  layout: {
    containerWidth: "60rem",
    containerPadding: "2rem",
    margin: "1rem",
    padding: "1rem",
    spacingSmall: "0.5rem",
    spacingMedium: "1rem",
    spacingLarge: "2rem",
  },

  breakpoints: {
    small: "600px",
    medium: "768px",
    large: "1024px",
  },

  fontSize: {
    small: "0.75rem",
    medium: "1.08rem",
    large: "2rem",
    heading1: "2rem",
    heading2: "1.5rem",
    paragraph: "1rem",
  },

  image: {
    maxWidth: "100%",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },

  lineHeight: "1.5",

  lineThickness: "1px",

  iconSize: {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
  },

  button: {
    height: "2rem",
    width: "6rem",
  },

  input: {
    height: "2rem",
    width: "10rem",
  },

  fontFamily: {
    customFont: "'Almaq Refined', sans-serif",
    titleFont:  "'Protest Strike', sans-serif",
    headersFont: "'Quicksand', sans-serif",
    primaryFont: '"Poppins", sans-serif',
  },
  fontWeight: {
    light: 200,
    regular: 400,
    bold: 700,
  },
  
};

export default theme;
