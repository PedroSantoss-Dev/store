import { IProduct } from '../../../modules/home/components/types/product.types';
import * as S from './drawer.style';

interface IDrawer {
  title: string;
  open: boolean;
  onClose: () => void;
  product?: IProduct;
}
export const Drawer = ({ title, open, onClose }: IDrawer) => {
  return (
    <S.DrawerContainer title={title} placement="right" onClose={onClose} open={open}>
      <S.ProductsContainer>
        <S.Product></S.Product>
      </S.ProductsContainer>
    </S.DrawerContainer>
  );
};
