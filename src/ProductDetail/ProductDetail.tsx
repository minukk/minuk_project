import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductProps } from '../Type/interface';
import Card from 'src/ProductMain/Card/Card';
import styled from '@emotion/styled';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState<ProductProps[]>();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const productId = useMemo(() => location.search.slice(8), [location]);

  useEffect(() => {
    fetch('https://api.json-generator.com/templates/ePNAVU1sgGtQ/data', {
      headers: {
        Authorization: 'Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProductInfo(data.filter((item: ProductProps) => item.club.id === productId));
      })
      .catch((err) => console.error(err));
  }, [productId]);

  console.log(productInfo);
  if (loading) return <div>로딩중입니다....</div>;
  return (
    <DetailWrap>
      {productInfo && (
        <>
          <section>
            <h1>{productInfo[0].club.name}</h1>
            <div>
              <p>{productInfo[0].club.description}</p>
            </div>
            <div>
              <h2>클럽 상세 안내</h2>
              <p>
                모임 장소: <span>{productInfo[0].club.place}</span>
              </p>
              <p>
                클럽장: <span>{productInfo[0].leaders[0].name || '미정'}</span>
              </p>
              <p>
                참석자:{' '}
                {productInfo[0].partners.map((partner) => (
                  <span key={partner.name}>{partner.name}</span>
                ))}
              </p>
            </div>
          </section>
          <article>
            <Card item={productInfo[0].club} />
          </article>
        </>
      )}
    </DetailWrap>
  );
};

const DetailWrap = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 30px 120px;
  border-top: 1px solid #ddd;

  > section {
    width: 50%;
    font-size: 18px;

    > h1 {
      margin: 20px 0;
      font-size: 32px;
    }

    > div {
      margin: 20px 0;

      > h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      > p {
        margin: 10px 0;
      }

      span {
        color: #888;
      }
    }
  }
`;

export default ProductDetail;
