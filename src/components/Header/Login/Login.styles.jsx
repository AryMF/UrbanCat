import styled from 'styled-components';

const ImageStyle = styled.img`
    height:64px;
    width:64px;
`;

const LogoutButton = styled.button`
    margin: 20px;
    height: 32px;
    width: 100px;
    background: transparent;
    border: 1px solid ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
    border-radius: 20px;
    font-size: 18px;

    :hover {
        background-color: ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
        color: #ffffff;
    }
`;

const Dropdown = styled.div`
	display: ${(props) => props.display};
	position: absolute;
	top: 42px;
    right: 0px;
    z-index: 10;

	width: 250px;
    height: fit-content;
    
    flex-direction: column;
`;

const TransparentDiv = styled.div `
    width: 250px;
    height: 40px;
    background-color: transparent;
`;

const DropdownContent = styled.form`
    width: 250px;
    height: fit-content;
    
    background-color: ${props => props.theme.secondAccentColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLabel = styled.label `
    font-size: 18px;
    color: ${props => props.theme.mainFontColor};
`;

const StyledInput = styled.input `
    font-size: 16px;
    color: ${props => props.theme.mainFontColor};
    background-color: transparent;
    border: 1px solid ${props => props.theme.isLight ? props.theme.mainAccentColor : props.theme.mainFontColor};
`;

const UserMenuButtonContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
	height: fit-content;
	width: fit-content;
	background-color: transparent;
`;

export { 
	ImageStyle,
	LogoutButton,
	Dropdown,
	TransparentDiv,
	DropdownContent,
	StyledLabel,
	StyledInput,
	UserMenuButtonContainer
};