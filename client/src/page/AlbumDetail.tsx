import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import AlbumDetailComponents from '../components/AlbumDetailComponents';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumDetailStart } from '../Redux/songSlice';
import { RootState } from '../Redux/store';

const Container = styled.div``;

const Wrapper = styled.div``;

function AlbumDetail() {
  const dispatch = useDispatch();
  const track = useSelector((state: RootState) => state.song);
  useEffect(() => {
    dispatch(fetchAlbumDetailStart('97'));
  }, [dispatch]);
  return (
    <Container>
      <Wrapper>
        <AlbumDetailComponents track={track} />
      </Wrapper>
    </Container>
  );
}

export default AlbumDetail;
