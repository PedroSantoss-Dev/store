import { useEffect, useState } from 'react';

import { IProduct } from '../../../shared/@types/product.types';
import { PRODUCT } from '../../../shared/constants/urls';
import * as S from '../style/favoriteScreen.style';

const FavoriteScreen = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(PRODUCT)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }),
    [];
  return (
    <S.FavoriteContainer>
      {product.map((item) => (
        <S.HoverMask key={item.id}>
          <S.Img src={item.image} alt={item.title} />
          <S.Box>
            <h4>{item.title}</h4>
            <S.Price>$ {item.price}</S.Price>
            <S.Btn>
              <S.AddCart />
              <S.Remove />
            </S.Btn>
          </S.Box>
        </S.HoverMask>
      ))}
    </S.FavoriteContainer>
  );
};

export default FavoriteScreen;
