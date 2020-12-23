import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 10vw;

    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 1.6rem 0.8rem;

    background-color: #8F0419;
`;

export const Logo = styled.img`
    width: 100%;
`;

export const Button = styled(Link)`
    height: 10rem;
    width: 100%;

    margin: 0.8rem 0;
    padding: 0.3rem;

    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;

    transition: 0.3s;

    img {
        height: 70%;
        flex: 1;
    }
    
    span {
        font: 500 2rem Poppins;
        color: #eeeeee;
    }

    &:hover {
        background-color: #B22042;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Back = styled(Link)`
    svg {
        color: #eeeeee;
        font-size: 3.2rem;
    }
`;