import styled from 'styled-components';


const Grid= styled.div`
        display: grid;
        grid-gap: 20px;
        width: 95%;
        margin: 0 auto;
        grid-template-columns: repeat(3, minmax(150px, auto));
        grid-template-rows: repeat(auto-fill, 1fr);
        grid-area: "promotionLarge";
        @media  (max-width: 768px) {
            grid-template-columns:minmax(150px,1fr);
            grid-auto-rows: minmax(125px, auto); 
         }

`;
const LinkPromo= styled.div`
        grid-area: "LinkPromo" ;
        background-color:red;
        grid-column: span 3;
`;

const PromotionLarge= styled.ul`
        border: 3px solid black;
        min-height: 50px;
        grid-column: span 3;
        @media (max-width: 768px) {
        }
`;

const PromotionSmall= styled.ul`
        min-height: 50px;
        border: 3px solid yellow;
        grid-column: 1/4;
`;

const LinkProdu= styled.div`
        background: gray;
        align-self:end;
        @media (max-width: 768px) {
        }
`;

const Categories = styled.div`
        color:white;
        /*grid-row: 5/5;*/
        grid-column: 1/4;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
`;

const Category = styled.figure`
        background-color:pink;
        min-width: 200px;
        min-height: 200px;
`


export {Grid , Categories, Category , PromotionLarge,PromotionSmall , LinkPromo ,LinkProdu};