import styled from 'styled-components';

const ProductPageConatiner = styled.div `
    width: 100vw;
    height: calc(100vh - 124px); /*Header + Footer height*/
    /* background-color: green; */

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopSection = styled.div `
    /* background-color: purple; */
    width: calc(100vw - 20px);
    height: 60px;
    margin-top: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const BottomSection = styled.div `
    /* background-color: pink; */
    width: calc(100vw - 20px);
    height: calc(100% + 84px);
    flex: 1;

    overflow: auto;

    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftPanel = styled.div `
    /* background-color: lightblue; */
    width: 50%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const RightPanel = styled.div `
    /* background-color: lightseagreen; */
    width: 50%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StyledImg= styled.img `
    width: 75%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StyledLabel = styled.label `
    font-size: ${props => props.size};
    color: ${props => props.theme.mainFontColor};
    margin-left: ${props => props.margin};
`;

export { ProductPageConatiner,
	TopSection,
	BottomSection,
	LeftPanel,
	RightPanel,
	StyledImg,
	StyledLabel
};