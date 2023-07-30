import { Spin } from 'antd';

import { IProduct } from '../../../shared/@types/product.types';
import ProductCard from '../../../shared/components/card/productCard';
import { Header } from '../../../shared/components/header/header';
import { Screen } from '../../../shared/components/screen/screen';
import { PRODUCT } from '../../../shared/constants/urls';
import useRequest from '../../../shared/hooks/useRequest';
import * as S from '../styles/homeStyle';

const HomeScreen = () => {
  const { data, loading } = useRequest<IProduct[]>(PRODUCT);
  if (loading) {
    return (
      <S.SpinContainer>
        <Spin />
      </S.SpinContainer>
    );
  }
  return (
    <Screen>
      <S.Container>
        {data &&
          data.map((item) => (
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
    </Screen>
  );
};
export default HomeScreen;
