import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

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

const ButtonStyled = styled.div `
    width: 42px;
    height: 42px;
    left: 1270px;
    top: 20px;

    border: 1px solid ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
    box-sizing: border-box;
    border-radius: 21px;
    
    margin: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 30%;
    }
`;

function ShoppingCarButton() {
	return(
		<ButtonStyled>
			<StyledIcon icon={faShoppingBag} size="lg"/>
		</ButtonStyled>
	);
}

export default ShoppingCarButton;