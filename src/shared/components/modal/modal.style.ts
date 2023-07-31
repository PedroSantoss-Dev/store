import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalContainer = styled(Modal)`
  .ant-modal,
  .ant-modal-title {
    margin: 10px;
  }
  h4 {
    white-space: nowrap;
    width: 12rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const BtnModal = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
