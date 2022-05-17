import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ProductSearchProps, SearchSelect, SearchStateProps } from 'src/Type/interface';
import Checkbox from './Checkbox/Checkbox';
import CategoryList from './CategoryList/CategoryList';

const ProductSearch = ({ setSearch, searchKeyword, setSearchKeyword, searchEnter }: ProductSearchProps) => {
  const [select, setSelect] = useState<SearchStateProps>({
    filter: '',
    search: [],
  });

  const [isFilterClick, setIsFilterClick] = useState(false);

  const [selectCate, setSelectCate] = useState<SearchSelect>({
    placeFilter: [],
    dayFilter: [],
    typeFilter: [],
    categoryFilter: [],
  });

  const navigate = useNavigate();

  const resetSearch = useCallback(() => {
    setSelectCate({
      placeFilter: [],
      dayFilter: [],
      typeFilter: [],
      categoryFilter: [],
    });
    setSearch({
      place: [],
      day: [],
      type: [],
      category: [],
    });
    navigate('/apply');
  }, [setSelectCate, setSearch, navigate]);

  const submitFilter = useCallback(() => {
    const filterEntries = Object.entries(selectCate);

    const filter = filterEntries.filter((item: [string, string[]]) => item[1].length !== 0);
    console.log(filter);
    let result = '';

    filter.forEach((item) => {
      result += `?${item[0]}`;
      item[1].forEach((text: string, idx: number) => {
        const indexText = idx ? '&' : '=';
        result += `${indexText}${text}`;
      });
    });

    setSearch({
      place: selectCate.placeFilter,
      day: selectCate.dayFilter,
      type: selectCate.typeFilter,
      category: selectCate.categoryFilter,
    });

    navigate(`/apply${result}`);

    setIsFilterClick(false);
  }, [selectCate, navigate, setSearch]);

  const handleSearchInput = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        navigate(`/apply?searchKeyword=${searchKeyword}`);
        searchEnter();
      }
    },
    [searchKeyword, navigate, searchEnter],
  );

  return (
    <SearchWrap>
      <ResetBtn onClick={resetSearch}>초기화</ResetBtn>
      <CategoryList setIsFilterClick={setIsFilterClick} setSelect={setSelect} />
      {isFilterClick && (
        <CheckboxWrap>
          {select.search.map((item) => {
            return (
              <Checkbox key={item} item={item} select={select} selectCate={selectCate} setSelectCate={setSelectCate} />
            );
          })}
          <button onClick={() => setIsFilterClick(false)}>취소</button>
          <button onClick={submitFilter}>적용</button>
        </CheckboxWrap>
      )}
      <SearchInput
        type='search'
        placeholder='검색어를 입력하세요.'
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyDown={(e) => handleSearchInput(e)}
      />
    </SearchWrap>
  );
};

const SearchWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
`;

const ResetBtn = styled.button`
  text-decoration: underline;
  cursor: pointer;
`;

const CheckboxWrap = styled.ul`
  position: absolute;
  top: 60px;
  left: 430px;
  width: 260px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;

  > button {
    margin: 0 5px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;

    &:hover {
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default ProductSearch;
