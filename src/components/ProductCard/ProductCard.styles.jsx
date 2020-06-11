import styled from 'styled-components';

const ProductCardConatiner = styled.div `
    /* background-color: cadetblue;
    width: 100%;
    min-width: 280px;
    height: fit-content; */

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    display: grid;
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-template-rows: 10px auto 10px repeat(5, auto) repeat(3, auto) 10px;
    grid-row-gap: 5px;
    grid-template-areas: ". . . . . . . ." ". deleteButton . . . . topButton ." ". . . . . . . ." ". img img img img img img ." ". img img img img img img ." ". img img img img img img ." ". img img img img img img ." ". img img img img img img ." ". title title title title title title ." ". info info info info info info ." ". info info info info info info ." ". . . . . . . .";
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    /* background-color: var(--backgroundWhite); */
    background-color: cadetblue;
    flex: 1;
    justify-self: center;
    align-self: start;
`;

export { ProductCardConatiner };