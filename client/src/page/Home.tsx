import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import TrackM from '../components/Track';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchStart, fetchUpdateStart } from '../Redux/songSlice';
import { Song } from '../types/Task';
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
  const update = async (item: Song) => {
    dispatch(fetchStart());
    dispatch(fetchUpdateStart(item));
    dispatch(fetchStart());
  };
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
  return (
    <Container>
      <Wrapper>
        <TrackM song={song} update={update} />
      </Wrapper>
    </Container>
  );
}

export default Home;
