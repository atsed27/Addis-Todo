import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import AlbumA from '../components/AlbumA';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchAlbumStart } from '../Redux/songSlice';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`;
const AllAlbum = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  background-color: rgb(228, 211, 111);
`;

function Album() {
  const album = useSelector((state: RootState) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumStart());
  }, [dispatch]);
  return (
    <Container>
      <AllAlbum>Albums : {album.length}</AllAlbum>
      <Wrapper>
        <AlbumA album={album} />
      </Wrapper>
    </Container>
  );
}

export default Album;
