import React, { useCallback, useEffect, useState } from 'react';
import { ProductProps } from 'src/Type/interface';
import styled from '@emotion/styled';
import Card from './Card/Card';
import ProductSearch from './ProductSearch/ProductSearch';
import useScroll from 'src/Hooks/useScroll';

const Main = () => {
  const [product, setProduct] = useState<ProductProps[]>([]);
  const [count, setCount] = useState(12);
  const scrollHeight = useScroll();
  const [filterProduct, setFilterProduct] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<any>({
    place: [],
    day: [],
    type: [],
    category: [],
  });
  const [searchKeyword, setSearchKeyword] = useState('');
  const url = 'https://api.json-generator.com/templates/ePNAVU1sgGtQ/data';

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: 'Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (search.place.length === 0 && search.type.length === 0) setFilterProduct(product);
    else {
      setFilterProduct(
        product.filter((data: any) => {
          for (const opt in search) {
            if (search[opt].length === 0) continue;
            return search[opt].includes(data.club[opt]);
          }
        }),
      );
    }
  }, [search, product]);

  useEffect(() => {
    if (scrollHeight >= 95) {
      setCount((prev) => prev + 12);
    }
  }, [scrollHeight]);

  const searchEnter = useCallback(() => {
    if (searchKeyword === '') setFilterProduct(product);
    else setFilterProduct((prev) => prev.filter((item) => item.club.name.includes(searchKeyword)));
  }, [searchKeyword, product]);

  if (loading) return <div>로딩중입니다...</div>;

  return (
    <MainWrap>
      <ProductSearch
        setSearch={setSearch}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        searchEnter={searchEnter}
      />
      <ProductCard>
        <ul>
          {filterProduct.slice(0, count).map((item) => {
            return <Card key={item.club.id} item={item.club} />;
          })}
        </ul>
      </ProductCard>
    </MainWrap>
  );
};

const MainWrap = styled.main`
  padding: 30px 40px;

  @media screen and (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const ProductCard = styled.section`
  padding: 30px 0px;

  > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    > ul {
      > li {
        width: 400px;
        margin-bottom: 30px;
      }
    }
  }
`;

export default Main;
