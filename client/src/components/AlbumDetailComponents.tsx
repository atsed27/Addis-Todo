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
          <Image
            src={
              'data:image/jpeg;base64,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'
            }
            alt="albumImg"
          />
        </ImageContainer>
        <AlbumTitle>Album:{track[0]?.album}</AlbumTitle>
        <ArtistName>{track[0]?.artist}</ArtistName>
        <YearAndTime>2018 | 40:33</YearAndTime>
      </Top>
      <MainComponent>
        <MusicContainer>
          {track.map((item) => (
            <div key={item._id}>
              <MusicCont>
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
