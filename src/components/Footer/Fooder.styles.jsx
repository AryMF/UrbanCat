import styled from 'styled-components';

const FooterContainer = styled.footer `
    --flag: ${props => props.theme.isLight};
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 40px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.isLight ? props.theme.mainFontColor : props.theme.secondFondColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { FooterContainer };