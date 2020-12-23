import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Button, Image, Logo, Text, Bottom, Top } from './styles';

import Background from '../../assets/images/background.svg';
import LogoSVG from '../../assets/images/politician.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo src={ LogoSVG } />
        <Text>
          O CamAPP foi feito para que todas as pessoas, principalmente os jovens, 
          tenham acesso direto e fácil a todas as informações necessárias para acompanhar 
          a vida de seus candidatos. Entre na página e pesquise por candidatos, partidos, 
          eventos e muito mais. Favorite os deputados para acompanhar de perto seu trabalho.
        </Text>
      </Top>

      <Bottom>
        <Image src={ Background } />
        <Button to="/deputados">
          <span>Navegar na câmara</span>
          <FaArrowRight />
        </Button>
      </Bottom>

    </Container>
  );
};

export default Home;