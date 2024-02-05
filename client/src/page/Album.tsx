import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
const AlbumContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div``;
const Image = styled.img``;
const AlbumTitle = styled.h5`
  margin: 0px;
  font-size: 18px;
`;
const Artist = styled.p`
  margin: 0px;
`;
function Album() {
  return (
    <Container>
      <AllAlbum>Albums : 4</AllAlbum>
      <Wrapper>
        <AlbumContainer>
          <ImageContainer>
            <Link to="/album/test">
              <Image src="../img/man.png" alt="music cover" />
            </Link>
          </ImageContainer>
          <AlbumTitle>
            <Link to={'/album/test'}>Ethiopia</Link>
          </AlbumTitle>

          <Artist>
            <Link to="/test">Tedd Afro</Link>
          </Artist>
        </AlbumContainer>
        <AlbumContainer>
          <ImageContainer>
            <Image src="../img/man.png" alt="music cover" />
          </ImageContainer>
          <AlbumTitle>Ethiopia</AlbumTitle>
          <Artist>Tedd Afro</Artist>
        </AlbumContainer>
        <AlbumContainer>
          <ImageContainer>
            <Image src="../img/man.png" alt="music cover" />
          </ImageContainer>
          <AlbumTitle>Ethiopia</AlbumTitle>
          <Artist>Tedd Afro</Artist>
        </AlbumContainer>
        <AlbumContainer>
          <ImageContainer>
            <Image src="../img/man.png" alt="music cover" />
          </ImageContainer>
          <AlbumTitle>Ethiopia</AlbumTitle>
          <Artist>Tedd Afro</Artist>
        </AlbumContainer>
      </Wrapper>
    </Container>
  );
}

export default Album;
