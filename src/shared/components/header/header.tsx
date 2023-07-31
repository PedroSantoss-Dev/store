import { MenuOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';

import Logo from '../../../assets/logo.png';
import { Cart } from '../../../modules/Cart/screen/cart';
import { Modal } from '../modal/modal';
import * as S from './header.styles';

interface Itoggle {
  toggle: () => void;
}
export const Header = ({ toggle }: Itoggle) => {
  return (
    <>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo>
            <S.Logo src={Logo} />
          </S.NavLogo>
          <S.MobileIcon onClick={toggle}>
            <MenuOutlined />
          </S.MobileIcon>

          <S.Menu>
            <S.Item>
              <S.NavLinks to="/home">
                <ShopOutlined />
              </S.NavLinks>
            </S.Item>
            <S.Item>
              <S.NavModal>
                <Modal />
              </S.NavModal>
            </S.Item>
            <S.Item>
              <S.NavModal>
                <Cart />
              </S.NavModal>
            </S.Item>
            <S.Item>
              <S.NavLinks to="/login">
                <UserOutlined />
              </S.NavLinks>
            </S.Item>
          </S.Menu>
        </S.NavbarContainer>
      </S.Nav>
    </>
  );
};
