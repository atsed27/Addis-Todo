import React from 'react';
import styled from '@emotion/styled';
import AlbumA from '../components/AlbumA';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`;
const AllAlbum = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

function Album() {
  return (
    <Container>
      <AllAlbum>Albums : 4</AllAlbum>
      <Wrapper>
        <AlbumA />
      </Wrapper>
    </Container>
  );
}

export default Album;
