import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 13vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 75%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 90%;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    flex: 1;
`;

export const NavItem = styled(Link)`
    font-weight: 700;
    font-size: 2.4rem;
    text-decoration: none;

    color: #A11A5F;

    transition: color, transform 0.3s;

    &:hover {
        color: #402044;
        transform: scale(1.02)
    }
`;

export const Separator = styled.div`
    height: 3.2rem;
    width: 2px;
    background-color: #A11A5F;

    margin: 0 1.4rem;
`;