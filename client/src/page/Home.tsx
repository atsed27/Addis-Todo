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

function Home() {
  const song = useSelector((state: RootState) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
  return (
    <Container>
      <Wrapper>
        <TrackM song={song} />
      </Wrapper>
    </Container>
  );
}

export default Home;
