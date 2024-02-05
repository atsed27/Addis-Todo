import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
function AlbumA() {
  return (
    <>
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
    </>
  );
}

export default AlbumA;
