import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  padding: 40px 0 40px 40px;
  grid-row-gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const SpinContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0dede;
`;
