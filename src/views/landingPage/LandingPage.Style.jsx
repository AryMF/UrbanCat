import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
	width: 100vw;
    height: calc(100vh - 124px); /*Header + Footer height*/

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopSection = styled.div `
    width: calc(100vw - 40px);
    height: 60px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const BottomSection = styled.div `
    width: calc(100vw - 40px);
    height: fit-content;
	margin-top: 10px;

    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Promotion= styled.div`
	width: 100%;
    height: fit-content;
    margin-bottom: 10px;
	display: flex;
	justify-content: center;
`;

const Img = styled.img`
	width: 90%;
	height: 380px;
	object-fit: cover;
	border-radius: 20px;
`;
const Img2 = styled.img`
    width: 90%;
	height: 170px;
	object-fit: cover;
	border-radius: 20px;
	@media  (max-width: 768px) {

	}
`;

const Categories = styled.div `
	width: 100%;
    height: fit-content;
	margin-bottom: 30px;

	display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;

`;

const Category = styled.img `
		@media  (max-width: 768px) {
			width: 90%;
        	height: 200px;
			object-fit: cover;
		}
`;

const StyledLabel = styled.label `
    font-size: ${props => props.size};
    color: ${props => props.theme.mainFontColor};
    margin-left: ${props => props.margin};
`;

const LinkStyled = styled(Link) `
`;

export {
	Container,
	TopSection,
	BottomSection,
	Promotion,
	Img,
	Img2,
	Categories,
	Category,
	StyledLabel,
};