import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import { Container, Logo, Button, ButtonContainer, Back } from './styles';

import LogoSVG from '../../assets/images/politician.svg';
import Deputado from '../../assets/images/politico.svg';
import Grupo from '../../assets/images/teamwork.svg';
import Evento from '../../assets/images/calendar.svg';

const Aside: React.FC = () => {
  return (
    <Container>
        <Logo src={LogoSVG} />

        <ButtonContainer>
            <Button to="">
                <img src={ Deputado } alt="deputados" />
                <span>Deputados</span>
            </Button>
            <Button to="">
                <img src={ Grupo } alt="partidos" />
                <span>Partidos</span>
            </Button>
            <Button to="">
                <img src={ Evento } alt="eventos" />
                <span>Eventos</span>
            </Button>
        </ButtonContainer>

        <Back to="/">
            <FaArrowLeft />
        </Back>
    </Container>
  );
};

export default Aside;