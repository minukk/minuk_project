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

  const [selectFilter, setSelectFilter] = useState<SearchSelect>({
    placeFilter: [],
    dayFilter: [],
    typeFilter: [],
    categoryFilter: [],
  });

  const navigate = useNavigate();

  const resetSearch = useCallback(() => {
    setSelectFilter({
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
  }, [setSelectFilter, setSearch, navigate]);

  const submitFilter = useCallback(() => {
    const filterEntries = Object.entries(selectFilter);

    const filter = filterEntries.filter((item: [string, string[]]) => item[1].length !== 0);
    let result = '';

    filter.forEach((item) => {
      result += `?${item[0]}`;
      item[1].forEach((text: string, idx: number) => {
        const indexText = idx ? '&' : '=';
        result += `${indexText}${text}`;
      });
    });

    setSearch({
      place: selectFilter.placeFilter,
      day: selectFilter.dayFilter,
      type: selectFilter.typeFilter,
      category: selectFilter.categoryFilter,
    });

    navigate(`/apply${result}`);

    setIsFilterClick(false);
  }, [selectFilter, navigate, setSearch]);

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
      <div>
        <ResetBtn onClick={resetSearch}>초기화</ResetBtn>
        <CategoryList setIsFilterClick={setIsFilterClick} setSelect={setSelect} />
        {isFilterClick && (
          <CheckboxWrap>
            {select.search.map((item) => {
              return (
                <Checkbox
                  key={item}
                  item={item}
                  select={select}
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                />
              );
            })}
            <button onClick={() => setIsFilterClick(false)}>취소</button>
            <button onClick={submitFilter}>적용</button>
          </CheckboxWrap>
        )}
      </div>
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

  > div {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 340px;
    margin-top: 10px;
    padding: 15px;
  }
`;

const ResetBtn = styled.button`
  text-decoration: underline;
  cursor: pointer;
`;

const CheckboxWrap = styled.ul`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 260px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px lightgray;

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
