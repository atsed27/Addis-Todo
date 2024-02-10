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
  padding: 5px 7px;
  color: #0016;
  &:hover {
    background-color: rgb(228, 211, 111);
  }
  &:active {
    background-color: rgb(228, 228, 253);
  }
`;
function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            Home
          </Link>
        </Title>
        <Title>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/album">
            Album
          </Link>
        </Title>
        <Title>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/artist">
            Artist
          </Link>
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
