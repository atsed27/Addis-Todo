import React from 'react';
import styled from '@emotion/styled';
const HR = styled.hr`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MainComponent = styled.div`
  margin: 0px 5px;
  overflow-y: scroll;
`;
const Track = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AllTrack = styled.h4``;
const Right = styled.div``;
const Add = styled.button`
  margin-right: 10px;
  font-size: 25px;
  border: none;
  font-weight: 600;
`;
const Play = styled.button`
  margin-right: 10px;
  margin-right: 10px;
  font-size: 25px;
  border: none;
  font-weight: 600;
`;
const Shelf = styled.button`
  margin-right: 10px;
  font-size: 25px;
  border: none;
  font-weight: 600;
`;
const MusicContainer = styled.div`
  margin-bottom: 170px;
  background-color: gray;
  @media only screen and (max-width: 600px) {
    background-color: white;
  }
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
function TrackM() {
  return (
    <MainComponent>
      <HR />
      <Track>
        <Top>
          <AllTrack>All Track :30</AllTrack>
          <Right>
            <Add>+</Add>
            <Play>p</Play>
            <Shelf>s</Shelf>
          </Right>
        </Top>
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
      </Track>
    </MainComponent>
  );
}

export default TrackM;
