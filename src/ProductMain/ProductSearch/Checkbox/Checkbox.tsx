import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CheckboxProps, SearchSelect } from 'src/Type/interface';

const Checkbox = ({ item, select, selectFilter, setSelectFilter }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkedType = useCallback(
    (type: string) => {
      let data;
      switch (type) {
        case 'placeFilter':
          data = selectFilter.placeFilter;
          break;
        case 'dayFilter':
          data = selectFilter.dayFilter;
          break;
        case 'typeFilter':
          data = selectFilter.typeFilter;
          break;
        case 'categoryFilter':
          data = selectFilter.categoryFilter;
          break;
        default:
          break;
      }
      return data;
    },
    [selectFilter],
  );

  const handleChecked = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checkedFunc = e.target.checked
        ? checkedType(select.filter)?.concat(e.target.value)
        : checkedType(select.filter)?.filter((item) => item !== e.target.value);
      setSelectFilter((prev: SearchSelect) => ({
        ...prev,
        [select.filter]: checkedFunc,
      }));
    },
    [checkedType, setSelectFilter, select.filter],
  );

  useEffect(() => {
    checkedType(select.filter)?.includes(item) ? setIsChecked(true) : setIsChecked(false);
  }, [selectFilter]);

  return (
    <CheckboxItem>
      <input type='checkbox' checked={isChecked} value={item} onChange={(e) => handleChecked(e)} />
      {item}
    </CheckboxItem>
  );
};

const CheckboxItem = styled.li`
  margin: 10px 0;
`;

export default React.memo(Checkbox);
