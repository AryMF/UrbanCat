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
            grid-auto-rows: minmax(50px, auto); 
         }

`;
const LinkPromo= styled.div`
        grid-area: "LinkPromo" ;
        background-color:red;
        grid-column: span 3;
`;

const PromotionLarge= styled.ul`
        min-height: 50px;
        grid-column: span 3;
      &::before {
        content: "THE BEST PROMOTION";
        position: relative;
        background-color: rgba(0,0,0,0.5);
        padding: 1rem; 
        top: 50px;
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: medium;
      }

`;

const PromotionSmall= styled.ul`
        min-height: 50px;
        border: 3px solid yellow;
        grid-column: 1/4;
`;

const LinkProdu= styled.div`
        background: gray;
        grid-column: span 3;
        @media (max-width: 768px) {
          align-self: flex-end;
        }
`;

const Categories = styled.div`
        color:white;
        grid-column: 1/4;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
`;

const Category = styled.figure`
        background-color:pink;
        min-width: 200px;
        min-height: 200px;
        margin: 0.5rem;
        overflow: hidden:
`
const Img = styled.img`
        width: 100%;
        border-radius: 20px;
`

export {Grid ,Img, Categories, Category , PromotionLarge,PromotionSmall , LinkPromo ,LinkProdu};