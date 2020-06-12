import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  /* background-color: red; */
  margin: 0 auto;

`;
const Nav = styled.div`
  /* background-color: green; */
  width: calc(100vw - 20px);
  height: 60px;
  margin-top: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const PromotionList = styled.div`
  /* background-color: grey; */
  display: grid;
  grid-gap: 30px;
  width: 75%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100vw - 20px);
  }
`;
const PromotionItem = styled.div`
  background-color: white;
  height: 150px;
  width: 100%;
`;
export { PromotionList, PromotionItem, Container, Nav };