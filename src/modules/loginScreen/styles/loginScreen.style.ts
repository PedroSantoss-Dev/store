import { Typography } from 'antd';
import styled from 'styled-components';

export const { Title } = Typography;

export const ContainerLoginScreen = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #535bf2;
  background: -webkit-linear-gradient(to right, #535bf2, #2c98d6, #2c76d6);
  background: linear-gradient(to right, #535bf2, #2c98d6, #2c76d6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
`;

export const ContainerText = styled.article`
  width: 25rem;
  height: 20rem;
`;

export const ContainerForm = styled.form`
  width: 30rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(214, 135, 155, 0.637);
  border-radius: 10px;
`;
