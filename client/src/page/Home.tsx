import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import TrackM from '../components/Track';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchStart } from '../Redux/songSlice';
const Container = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

const Wrapper = styled.div``;
const TitleContainer = styled.div`
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
  padding: 7px 17px;
  border-radius: 0.9rem;
  margin: 16px 0px;
  font-size: 16px;
  font-weight: 600;
`;
const Image = styled.div`
  background-color: red;
`;
const Img = styled.img``;

function Home() {
  const song = useSelector((state: RootState) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
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
        <TrackM song={song} />
      </Wrapper>
    </Container>
  );
}

export default Home;
