import styled from 'styled-components';


const Grid= styled.div`
        border: black;
        display: grid;
        grid-gap: 20px;
        width: 95%;
        margin: 0 auto;
        grid-template-areas: 
        "LinkPromo . ."
        "promotionLarge promotionLarge promotionLarge"
        "promotionSmall promotionSmall promotionSmall"
                                      ". . LinkProdu "
        "categoryOne    categoryTwo    categoryThree ";
        grid-template-columns: repeat(3 , 1fr);
        grid-template-rows:  repeat(5, 1fr);  

        
        @media screen and (max-width: 700px) {
                grid-template-areas:
                "LinkPromo"
                "promotionLarge"
                "promotionSmall"
                "LinkProdu"
                "categoryOne"
                "categoryTwo"   
                "categoryThree";   
        }
`;
const LinkPromo= styled.div`
        grid-area: "LinkPromo" ;
`;
const LinkProdu= styled.div`
        grid-area: "LinkProdu";
        /* grid-column: 3 / 4 ;
        grid-row: 4 / 5; */
`;
// const Promotions= styled.div`
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         grid-area: "promotions";
//         grid-column: 1 / 4;
//         grid-row: 2 / 4;
// `;

const PromotionLarge= styled.ul`
        border: 3px solid yellow;
        grid-area: promotionLarge;
`;

const PromotionSmall= styled.ul`
        border: 3px solid yellow;
        grid-area: promotionSmall;
`;

// const Categorys= styled.div`
//         background-color: black;
//         display: grid;
//         grid-template-columns: 1fr 1fr 1fr;
//         grid-area: "category"; 
//         grid-column: 1 / 4;
//         grid-row: 5 / 6;
//         grid-gap: 10px;
// `;

const CategoryOne= styled.div`
        background-color: red;
        grid-area: categoryOne;
`;

const CategoryTwo= styled.div`
        background-color: red;
        grid-area: categoryTwo;
`;
const CategoryThree= styled.div`
        background-color: red;
        grid-area: categoryThree;
`;



export {Grid ,  CategoryOne,CategoryTwo ,CategoryThree , PromotionLarge,PromotionSmall , LinkPromo ,LinkProdu};