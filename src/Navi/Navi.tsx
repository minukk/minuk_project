import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Header>
      <Link to='/'>
        <h1>TREVARI</h1>
      </Link>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  border-bottom: 1px solid #333;
  font-weight: bold;

  h1 {
    font-size: 36px;
  }
`;

export default Nav;
