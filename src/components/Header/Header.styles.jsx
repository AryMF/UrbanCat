import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    margin-left: 10px;
    cursor: pointer;
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const SymbolLogo = styled(ReactLogo2) `
    flex: 1;
    max-height: 70px;
    margin: 5px;
    margin-left: 10px;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

const StyledDiv = styled.div `
    flex: 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;

    @media (max-width: 768px) {
        flex: 5;
    }
`;

const StyledLabel = styled.label `
    font-size: 18px;
    text-align: center;
    color: ${props => props.theme.mainFontColor};
    margin-right: 15px;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-right: 5px;
    }
`;

const StyledIcon = styled(FontAwesomeIcon) `
    color: ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
    cursor: pointer;

    :hover {
        color: ${props => props.theme.secondFondColor};
    }

    @media (max-width: 768px) {
        :hover, :focus {
            color: ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
        }
    }
`;

const ShoppingCarPlaceholder = styled.div `
    width: 140px;
    height: 42px;
    left: 1270px;
    top: 20px;

    border: 1px solid ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
    box-sizing: border-box;
    border-radius: 21px;
    
    margin: 5px;
    margin-right: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 30%;
    }
`;

export {
	HeaderContainer,
	HorizontalLogo,
	SymbolLogo,
	StyledDiv,
	StyledLabel,
	StyledIcon,
	ShoppingCarPlaceholder
};