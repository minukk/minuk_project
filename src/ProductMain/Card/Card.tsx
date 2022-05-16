import styled from '@emotion/styled';
import React from 'react';
import { ItemProps } from 'src/Type/interface';

const Card = ({ item }: ItemProps) => {
  return (
    <CardWrap>
      <img alt={item.name} src={item.coverUrl} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </CardWrap>
  );
};

const CardWrap = styled.li`
  width: 380px;
  height: 500px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  > img {
    width: 100%;
    height: 260px;
    border-radius: 5px;
    object-fit: cover;
  }

  > h2 {
    margin: 30px 10px;
    font-size: 26px;
    font-weight: bold;
  }

  > p {
    margin: 0 10px;
    color: #888;
  }
`;

export default React.memo(Card);
