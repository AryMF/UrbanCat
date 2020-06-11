import styled from 'styled-components';
import { ReactComponent as ReactLogo } from '../../assets/logo_horizontal.svg';
import { ReactComponent as ReactLogo2 } from '../../assets/logo_Cat.svg';

const HeaderContainer = styled.header `
    width: 100vw;
    height: 83px;
    background-color: ${props => props.theme.secondAccentColor};
    display: flex;
    justify-content: flex-start;
`;

const HorizontalLogo = styled(ReactLogo) `
    flex: 1;
    max-height: 70px;
    margin: 5px;
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const SymbolLogo = styled(ReactLogo2) `
    flex: 1;
    max-height: 70px;
    margin: 5px;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

const StyledDiv = styled.div `
    flex: 4;
    background-color: transparent;
`;

export { HeaderContainer, HorizontalLogo, SymbolLogo, StyledDiv };