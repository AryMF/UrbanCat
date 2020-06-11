import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCardConatiner = styled.div `
    width: 100%;
    min-width: 250px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopSection = styled.div `
    width: 100%;

    display: flex;
    justify-content: flex-end;
`;

const MidSectionImg= styled.img `
    width: 100%;
`;

const StyledLabel = styled.label `
    font-size: ${props => props.size};
    color: ${props => props.theme.mainFontColor};
    margin-left: ${props => props.margin};
`;

const BottomSection = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
`;

// const StyledIcon = styled(FontAwesomeIcon) `
//     color: ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
//     cursor: pointer;

//     :hover {
//         color: ${props => props.theme.secondFondColor};
//     }

//     @media (max-width: 768px) {
//         :hover, :focus {
//             color: ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
//         }
//     }
// `;

// const ShoppingCarButton = styled.div `
//     width: 42px;
//     height: 42px;
//     left: 1270px;
//     top: 20px;

//     border: 1px solid ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
//     box-sizing: border-box;
//     border-radius: 21px;
    
//     margin: 5px;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media (max-width: 768px) {
//         width: 30%;
//     }
// `;

export { ProductCardConatiner,
	TopSection,
	MidSectionImg,
	BottomSection,
	StyledLabel
};