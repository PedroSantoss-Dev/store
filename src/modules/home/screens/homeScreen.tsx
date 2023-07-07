import { useEffect, useState } from 'react';

import { PRODUCT } from '../../../shared/constants/urls';
import ProductCard from '../components/product/productCard';
import { IProduct } from '../components/types/product.types';
import * as S from '../styles/homeStyle';

const HomeScreen = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(PRODUCT)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }),
    [];
  return (
    <S.Container>
      {product.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          description={item.description}
          image={item.image}
        />
      ))}
    </S.Container>
  );
};
export default HomeScreen;
