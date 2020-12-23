import React from 'react';

import { Container, Content, Logo, Nav, NavItem, Separator } from './styles';

import LogoSVG from '../../assets/images/politician.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={LogoSVG} />
        <Nav>
          <NavItem to="">Deputados</NavItem>
          <Separator />
          <NavItem to="">Partidos</NavItem>
          <Separator />
          <NavItem to="">Eventos</NavItem>
          <Separator />
          <NavItem to="">Frentes</NavItem>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;