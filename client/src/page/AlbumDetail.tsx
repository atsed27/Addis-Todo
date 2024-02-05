import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div``;

const Wrapper = styled.div``;
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
function AlbumDetail() {
  return (
    <Container>
      <Wrapper>
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
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />{' '}
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
            <HR />
            <MusicCont>
              <Img2 src={'/'} alt="music" />
              <Music>
                <MusicTitle>Ethiopia</MusicTitle>
                <Artist>Tedd Afro</Artist>
              </Music>
            </MusicCont>
          </MusicContainer>
        </MainComponent>
      </Wrapper>
    </Container>
  );
}

export default AlbumDetail;
