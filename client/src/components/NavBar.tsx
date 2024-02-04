import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  color: rgb(187, 186, 186);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h4`
  margin-right: 10px;
`;
function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Title>Home</Title>
        <Title>Album</Title>
        <Title>Artist</Title>
        <Title>Gener</Title>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
