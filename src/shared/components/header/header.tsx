import { HeartOutlined, MenuOutlined, ShopOutlined, ShoppingOutlined } from '@ant-design/icons';

import Logo from '../../../assets/logo.png';
import { ModalLogin } from '../modal/modal';
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
              <S.NavLinks>
                <ShopOutlined />
              </S.NavLinks>
            </S.Item>
            <S.Item>
              <S.NavLinks>
                <HeartOutlined />
              </S.NavLinks>
            </S.Item>
            <S.Item>
              <S.NavLinks>
                <ShoppingOutlined />
              </S.NavLinks>
            </S.Item>
            <S.Item>
              <S.NavLinks>
                <ModalLogin />
              </S.NavLinks>
            </S.Item>
          </S.Menu>
        </S.NavbarContainer>
      </S.Nav>
    </>
  );
};
