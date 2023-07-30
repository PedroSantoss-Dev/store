import { useState } from 'react';

import { Header } from '../header/header';
import { Container } from './screen.style';
interface IScreenProps {
  children: React.ReactNode;
}
export const Screen = ({ children }: IScreenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Header toggle={toggle} />
      {children}
    </Container>
  );
};
