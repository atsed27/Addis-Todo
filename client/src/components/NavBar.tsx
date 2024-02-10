import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
        <Title>
          <Link to="/">Home</Link>
        </Title>
        <Title>
          <Link to="/album">Album</Link>
        </Title>
        <Title>
          <Link to="/artist">Artist</Link>
        </Title>
        <Title>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/genre">
            Genre
          </Link>
        </Title>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
