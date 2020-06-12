import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  /* background-color: red; */
  margin: 0 auto;


    display: flex;
    flex-direction: column;
    align-items: center;
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
const CategoryList = styled.div`
    width: calc(100vw - 20px);
    height: calc(100% + 84px);
    flex: 1;

    overflow: auto;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    background-color: grey;
`;
const CategoryItem = styled.div`
  background-color: white;
  height: 180px;
  width: 100%;
`;
export { CategoryList, CategoryItem, Container, Nav };