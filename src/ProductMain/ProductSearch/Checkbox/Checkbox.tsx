import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CheckboxProps } from 'src/Type/interface';

const Checkbox = ({ item, select, selectCate, setSelectCate }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkedType = (type: string) => {
    let data;
    switch (type) {
      case 'placeFilter':
        data = selectCate.placeFilter;
        break;
      case 'dayFilter':
        data = selectCate.dayFilter;
        break;
      case 'typeFilter':
        data = selectCate.typeFilter;
        break;
      case 'categoryFilter':
        data = selectCate.categoryFilter;
        break;
      default:
        break;
    }
    return data;
  };

  const handleChecked = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checkedFunc = e.target.checked
        ? checkedType(select.filter)?.concat(e.target.value)
        : checkedType(select.filter)?.filter((item) => item !== e.target.value);
      setSelectCate({
        ...selectCate,
        [select.filter]: checkedFunc,
      });
    },
    [selectCate],
  );

  useEffect(() => {
    checkedType(select.filter)?.includes(item) ? setIsChecked(true) : setIsChecked(false);
  }, [selectCate]);

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
