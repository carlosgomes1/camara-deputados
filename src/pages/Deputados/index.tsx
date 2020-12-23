import React, { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react';
import { FiHeart } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios';

import Aside from '../../components/Aside';

import { Container, Content, Combo, HeaderContent, ContainerDeputados, ListaDeputados, ContainerHeartButton } from './styles';

interface Partidos {
  id: number;
  sigla: string;
  nome: string;
}

interface Dados {
  dados: Partidos[];
}

interface Membro {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
  email: string;
}

interface DadosMembros {
  dados: Membro[];
}

const Deputados: React.FC = () => {
  const [partidos, setPartidos] = useState<Partidos[]>([]);
  const [partido, setPartido] = useState(0);
  const [deputados, setDeputados] = useState<Membro[]>([])

  const handleSelectPartido = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const partidoSelecionado = Number(event.target.value);

    setPartido(partidoSelecionado);
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    if (partido !== 0) {
      axios.get<DadosMembros>(`https://dadosabertos.camara.leg.br/api/v2/partidos/${partido}/membros?itens=50`).then(response => {
        setDeputados(response.data.dados)
      })
    }
  }, [partido])

  useEffect(() => {
    axios.get<Dados>('https://dadosabertos.camara.leg.br/api/v2/partidos?itens=100').then(response => {
      const PartidosReceived = response.data.dados.map(partido => {
        return { id: partido.id, sigla: partido.sigla, nome: partido.nome }
      });

      setPartidos(PartidosReceived);
    })
  }, [])

  return (
      <Container>
        <Aside />
        <Content>
          <HeaderContent onSubmit={handleSubmit}>
            <Combo onChange={handleSelectPartido}>
              <option value={0}>-- Selecione um partido --</option>
              { partidos.map(partido => (
                <option key={ partido.id } value={ partido.id }>{ partido.sigla } - { partido.nome }</option>
                )) }
            </Combo>
            <button type="submit">Buscar</button>
          </HeaderContent>

          <ContainerDeputados>
            <ListaDeputados>
                { deputados.map(deputado => (
                  <li key={deputado.id}>
                    <img src={ deputado.urlFoto } alt="deputado" />
                    <h1>{deputado.nome}</h1>
                    <h2>{deputado.siglaPartido} - {deputado.siglaUf}</h2>
                    <ContainerHeartButton>
                      <FiHeart />
                      <button>
                        <span>Ver mais</span>
                        <FaArrowRight />
                      </button>
                    </ContainerHeartButton>
                  </li>
                )) }
            </ListaDeputados>
          </ContainerDeputados>
        </Content>
      </Container>
  );
}

export default Deputados;