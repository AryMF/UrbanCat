import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  margin: 0 auto;

`
const Nav = styled.div`
  background-color: green;
  height: 150px;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const CategoryList = styled.div`
  background-color: grey;
  display: grid;
  grid-gap: 30px;
  grid-auto-rows: 150px;
  width: 95%;
  margin: 0 auto;
`
const CategoryItem = styled.div`
  background-color: white;
  height: 150px;
  width: 100%;
  margin: 0 auto;

`
export { CategoryList, CategoryItem, Container, Nav };