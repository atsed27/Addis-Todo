import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Album from './Album';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtistSongStart } from '../Redux/songSlice';
import { RootState } from '../Redux/store';
import TrackM from '../components/Track';

const Container = styled.div`
  margin: 10px 50px;
  @media only screen and (max-width: 600px) {
    margin: 10px;
  }
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.button``;
const Right = styled.button``;
const Track = styled.div`
  margin-top: 20px;
`;
const AlbumC = styled.div``;
function ArtistDetail() {
  const [track, setTrack] = useState(true);
  const [album, setAlbum] = useState(false);
  const params: string = 'aster';
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('hy');
    dispatch(fetchArtistSongStart(params));
  }, [dispatch]);
  const song = useSelector((state: RootState) => state.song);

  return (
    <Container>
      <Wrapper>
        <Top>
          <Left
            onClick={() => {
              setTrack(true);
              setAlbum(false);
            }}
          >
            Tracks
          </Left>
          <Right
            onClick={() => {
              setAlbum(true);
              setTrack(false);
            }}
          >
            Album
          </Right>
        </Top>
        {track && (
          <Track>
            <TrackM song={song} />
          </Track>
        )}
        {album && (
          <AlbumC>
            <Album />
          </AlbumC>
        )}
      </Wrapper>
    </Container>
  );
}

export default ArtistDetail;
