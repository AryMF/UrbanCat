import styled from 'styled-components';

const ColorImage = styled.button `
    cursor: pointer;
    width: 18px;
    height: 18px;

    background-color: ${props => props.color};;
    border: ${props => props.isActive ?  '' : '0.5px solid transparent'};
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    margin-right: 10px;
`;

export { ColorImage };