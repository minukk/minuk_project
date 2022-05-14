interface themeProp {
  fontSize: string;
  color: {
    black: string;
    border: string;
    white: string;
  };
}

const theme: themeProp = {
  fontSize: '16px',
  color: {
    black: '#000',
    border: '#333',
    white: '#fff',
  },
};

export default theme;
