import { HeartOutlined } from '@ant-design/icons';
import { useState } from 'react';

import FavoriteScreen from '../../../modules/favorite';
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
        <HeartOutlined />
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
        <FavoriteScreen />
      </S.ModalContainer>
    </>
  );
};
