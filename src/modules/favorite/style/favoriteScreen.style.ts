import { ShoppingCartOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const FavoriteContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HoverMask = styled.div`
  width: 25rem;
  height: 17rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2rem;
  box-shadow: 2px 0px 2px 1px rgba(95, 93, 93, 0.87);
  -webkit-box-shadow: 2px 0px 2px 1px rgba(95, 93, 93, 0.87);
  -moz-box-shadow: 2px 0px 2px 1px rgba(95, 93, 93, 0.87);
`;
export const Img = styled.img`
  width: 45%;
  height: 11rem;
  object-fit: fill;
  margin: 0px auto;
`;
export const Box = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const Title = styled.h4``;
export const Price = styled.p`
  margin: 0.5rem;
`;
export const Btn = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const AddCart = styled(ShoppingCartOutlined)`
  margin: 0.5rem;
`;
export const Remove = styled(CloseOutlined)`
  margin: 0.5rem;
`;
