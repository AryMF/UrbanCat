import styled from 'styled-components';

const Banner = styled.div`
display: grid;
grid-template-columns:25%, 25%, 25%, 25% ;
grid-template-rows: 10%, 60%, 20%, 10%;
background-color: #456789;
width: 80%;
margin: 0 auto;


`;

const Network = styled.div`
grid-column: 4 / 5;
background-color: #489712;
`;

const Picture = styled.div`
grid-column: 1 / 5;
background-color: #123482;
`;

const Description = styled.div`
grid-column: 1 / 5;
background-color: #489712;

`;

const Edit = styled.div`
grid-column: 3 / 4;

`;

const Delete = styled.div`
grid-column: 4 / 5;
`;


export { Banner, Network, Picture, Description, Edit, Delete  };