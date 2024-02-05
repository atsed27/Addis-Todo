import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`;
const Wrapper = styled.div``;
const AllArtist = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const ArtistContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const HR = styled.hr``;
const ArtistInfo = styled.div``;

const ImageContainer = styled.div`
  margin-right: 14px;
`;
const Image = styled.img``;
const ArtistName = styled.h5`
  margin: 0px;
  font-size: 18px;
`;
const AlbumAndTrack = styled.p`
  margin: 0px;
`;
function Artist() {
  return (
    <Container>
      <AllArtist>Albums : 4</AllArtist>
      <Wrapper>
        <ArtistContainer>
          <ImageContainer>
            <Image src="../img/man.png" alt="music cover" />
          </ImageContainer>
          <ArtistInfo>
            <ArtistName>Teddy Afro</ArtistName>
            <AlbumAndTrack>2 Album | 22 track</AlbumAndTrack>
          </ArtistInfo>
        </ArtistContainer>
        <HR />
        <ArtistContainer>
          <ImageContainer>
            <Image src="../img/man.png" alt="music cover" />
          </ImageContainer>
          <ArtistInfo>
            <ArtistName>Teddy Afro</ArtistName>
            <AlbumAndTrack>2 Album | 22 track</AlbumAndTrack>
          </ArtistInfo>
        </ArtistContainer>
        <HR />
        <ArtistContainer>
          <ImageContainer>
            <Image src="../img/man.png" alt="music cover" />
          </ImageContainer>
          <ArtistInfo>
            <ArtistName>Teddy Afro</ArtistName>
            <AlbumAndTrack>2 Album | 22 track</AlbumAndTrack>
          </ArtistInfo>
        </ArtistContainer>
        <HR />
      </Wrapper>
    </Container>
  );
}

export default Artist;
