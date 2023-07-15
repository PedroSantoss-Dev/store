import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Button from '../buttons/button';
import * as S from './modal.style';

export const ModalLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.BtnModal onClick={showModal}>
        <UserOutlined />
      </S.BtnModal>
      <S.ModalContainer
        title="pra ver seus pedidos e ter uma experiência personalizada, acesse sua conta :)"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        footer={[<Button key={null} type="primary" style={{ display: 'none' }}></Button>]}
      >
        <S.Container>
          <Button margin="1rem" width="8rem">
            Login
          </Button>
          <Button type="primary" margin="1rem" width="8rem">
            Cadastrar
          </Button>
        </S.Container>
      </S.ModalContainer>
    </>
  );
};
