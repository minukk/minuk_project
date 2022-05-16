import React from 'react';
import styled from '@emotion/styled';
import { Category, CategoryProps } from '../../../Type/interface';

const CategoryList = ({ setIsFilterClick, setSelect }: CategoryProps) => {
  return (
    <>
      {CATEGORY.map((item) => {
        return (
          <CategoryBtn
            key={item.title}
            onClick={() => {
              setIsFilterClick(true);
              setSelect({
                filter: item.filter,
                search: item.select,
              });
            }}
          >
            {item.title}
          </CategoryBtn>
        );
      })}
    </>
  );
};

const CATEGORY: Category[] = [
  {
    title: '장소',
    filter: 'placeFilter',
    select: ['강남', '안국', '온라인', '롯데백화점 본점(을지로입구역)', '롯데백화점 잠실점 문화센터', '그 외 장소'],
  },
  { title: '요일', filter: 'dayFilter', select: ['수', '목', '금', '토', '일'] },
  { title: '클럽유형', filter: 'typeFilter', select: ['함께 만드는 클럽', '클럽장 클럽', '함께 듣는 클럽'] },
  {
    title: '관심분야',
    filter: 'categoryFilter',
    select: ['경영경제/커리어', '인문/사회/과학', '문화/예술/문학', '자유주제'],
  },
];

const CategoryBtn = styled.button`
  margin: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    background-color: #222;
    color: #fff;
    cursor: pointer;
  }
`;

export default React.memo(CategoryList);
