import React from 'react';

import styled from '@emotion/styled';
import { Song } from '../types/Task';

const Top = styled.div`
  color: rgb(187, 186, 186);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
`;
const ImageContainer = styled.div``;
const Image = styled.img``;
const AlbumTitle = styled.p`
  margin: 0px;
  margin-top: 10px;
`;
const ArtistName = styled.p`
  margin: 0px;
  margin-top: 10px;
`;
const YearAndTime = styled.p`
  margin: 0px;
`;

const MusicContainer = styled.div`
  margin-bottom: 170px;
  background-color: gray;
  @media only screen and (max-width: 600px) {
    background-color: white;
  }
`;
const MainComponent = styled.div`
  margin: 0px 5px;
  overflow-y: scroll;
`;
const MusicCont = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    background-color: gray;
  }
`;

const Img2 = styled.img``;
const Music = styled.div`
  margin-left: 20px;
`;
const MusicTitle = styled.h4`
  padding-top: 5px;
  margin: 0px;
  font-size: 18px;
`;
const Artist = styled.p`
  padding-top: 10px;
  margin: 0px;
`;
const HR = styled.hr``;
type Props = {
  track: Song[];
};
function AlbumDetailComponents({ track }: Props) {
  console.log(track);
  return (
    <>
      <Top>
        <ImageContainer>
          <Image src="../img/man.png" alt="albumImg" />
        </ImageContainer>
        <AlbumTitle>Ethiop</AlbumTitle>
        <ArtistName>Teddy Afro</ArtistName>
        <YearAndTime>2018 | 40:33</YearAndTime>
      </Top>
      <MainComponent>
        <MusicContainer>
          {track.map((item) => (
            <div key={item._id}>
              <MusicCont>
                <Img2 src={'/'} alt="music" />
                <Music>
                  <MusicTitle>{item.title}</MusicTitle>
                  <Artist>{item.artist}</Artist>
                </Music>
              </MusicCont>
              <HR />
            </div>
          ))}
        </MusicContainer>
      </MainComponent>
    </>
  );
}

export default AlbumDetailComponents;
