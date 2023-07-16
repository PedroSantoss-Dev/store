import { Drawer } from 'antd';
import styled from 'styled-components';

export const DrawerContainer = styled(Drawer)``;
export const ProductsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;
export const Product = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
