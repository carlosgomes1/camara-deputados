import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    padding: 0.8rem;

    width: 100%;
    max-width: 75vw;

    height: 100%;
    max-height: 85vh;
`;

export const Logo = styled.img`
    width: 12.4rem;
`;

export const Image = styled.img`
    flex: 1;
    min-width: 43rem;
`;

export const Text = styled.h1`
    font: 700 2.2rem Poppins;
    color: #8F0419;

    margin-top: 3.6rem;
`;

export const Button = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 0.8rem;
    border: 0.1rem solid #B22042;
    background-color: #B22042;

    align-self: flex-end;

    max-width: 13rem;
    padding: 0.8rem;

    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;

    span {
        font: 500 1.8rem Poppins;
        color: #eeeeee;
    }

    svg {
        margin-top: 1.6rem;
        align-self: flex-end;
        
        font-size: 3.2rem;
        color: #ffffff;
    }

    &:hover {
        background-color: #8F0419;
    }
`;

export const Top = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;

    padding: 1.6rem;
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;