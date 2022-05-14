interface themeProp {
  fontSize: string;
  color: {
    black: string;
    white: string;
  };
}

const theme: themeProp = {
  fontSize: '16px',
  color: {
    black: '#000',
    white: '#fff',
  },
};

export default theme;
