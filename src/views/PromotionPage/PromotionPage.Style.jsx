import styled from 'styled-components';

const PromotionList = styled.div`
  background-color: grey;
  display: grid;
  grid-gap: 30px;
  grid-auto-rows: 150px;
  width: 90%;
  margin: 0 auto;
  padding-top: 30rem;
`
const PromotionItem = styled.li`
  background-color: white;
  height: 150px;
  width: 100%;
  margin: 0 auto;

`
export { PromotionList, PromotionItem };