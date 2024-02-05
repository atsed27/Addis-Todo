import React from 'react';
import styled from '@emotion/styled';
const Container = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

const Wrapper = styled.div``;
const TitleContainer = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Text = styled.div``;
const Title = styled.h2`
  margin-left: 10px;
  margin-bottom: 4px;
`;
const ArtistName = styled.p`
  margin: 0px;
`;
const Button = styled.button`
  background-color: rgb(59 130 246);
  border: none;
  padding: 7px 17mainpx;
  border-radius: 0.9rem;
  margin: 16px 0px;
  font-size: 16px;
  font-weight: 600;
`;

const HR = styled.hr`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.div`
  background-color: red;
`;
const Img = styled.img``;
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
function Home() {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Text>
            <Title>Ethiopia</Title>
            <ArtistName>Teddy Afro</ArtistName>
            <Button>List Now</Button>
          </Text>
          <Image>
            <Img src={'../img/man.png'} alt="music" />
          </Image>
        </TitleContainer>
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
      </Wrapper>
    </Container>
  );
}

export default Home;
