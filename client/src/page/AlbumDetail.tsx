import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import AlbumDetailComponents from '../components/AlbumDetailComponents';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumDetailStart } from '../Redux/songSlice';
import { RootState } from '../Redux/store';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Wrapper = styled.div``;

function AlbumDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const album: string = location.pathname.split('/')[2];
  console.log(album);
  const track = useSelector((state: RootState) => state.song);
  useEffect(() => {
    dispatch(fetchAlbumDetailStart(album));
  }, [album, dispatch]);
  return (
    <Container>
      <Wrapper>
        <AlbumDetailComponents track={track} />
      </Wrapper>
    </Container>
  );
}

export default AlbumDetail;
