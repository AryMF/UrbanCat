import styled from 'styled-components';

const SizeImage = styled.img `
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    background-color: ${props => props.isActive ? props.theme.mainAccentColor : 'transparent'};
`;

export { SizeImage };