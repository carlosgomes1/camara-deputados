import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const Content = styled.main`
    max-width: 90vw;
    flex: 1;
    margin-left: auto;
`;

export const HeaderContent = styled.form`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 2.4rem 0;

    > button {
        padding: 0 1.4rem;

        background-color: #8F0419;
        border: 0.2rem solid #8F0419;
        border-radius: 0.4rem;
        color: #eeeeee;

        transition: 0.3s;

        cursor: pointer;
    }

    > button:hover {
        background-color: #eeeeee;
        color: #8F0419;
    }
`;

export const Combo = styled.select`
    &:first-of-type {
        margin-right: 2.4rem;
    }

    text-align: center;

    padding: 0.8rem;
    border: 0.3rem solid #8F0419;
    border-radius: 0.8rem;

    font: 500 1.4rem Poppins;

    option {
        padding: 0.8rem;
    }
`;

export const ContainerDeputados = styled.div`
    padding: 2.4rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ListaDeputados = styled.ul`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.8rem;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;

        box-shadow: 2px 5px 5px rgba(0,0,0,0.15);

        padding: 0.8rem 0;

        transition: 0.3s;

        img {
            width: 90%;
            height: 100%;
            max-height: 25rem;
        }

        h1 {
            margin-top: 0.8rem;
            
            font: 700 2.2rem Poppins;
            color: #8F0419;

            text-align: center;
        }

        h2 {
            font: 500 1.8rem Poppins;
            color: #B51E40;
        }
    }

    li:hover {
        transform: scale(1.05)
    }
`;

export const ContainerHeartButton = styled.div`
    margin-top: auto;
    padding: 1rem 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg {
            color: #8F0419;
            font-size: 2.4rem;

            cursor: pointer;
        }

    svg:hover {
        color: #333;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: 0;

        display: flex;
        align-items: center;

        transition: 0.3s;

        span {
            font: 500 1.6rem Poppins;
            color: #8F0419;
            margin-right: 0.8rem;
        }

        svg {
            color: #8F0419;
            font-size: 1.6rem;
        }
    }

    button:hover {
        svg {
            color: #333;
        }

        span {
            color: #333;
        }
    }
`;