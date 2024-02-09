import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchArtistAlbumStart,
  fetchArtistSongStart,
} from '../Redux/songSlice';
import { RootState } from '../Redux/store';
import TrackM from '../components/Track';
import { useLocation } from 'react-router-dom';
import AlbumA from '../components/AlbumA';

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
  const location = useLocation();
  const artist: string = location.pathname.split('/')[2];
  console.log(artist);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('hy');
    dispatch(fetchArtistSongStart(artist));
    dispatch(fetchArtistAlbumStart(artist));
  }, [artist, dispatch]);
  const song = useSelector((state: RootState) => state.song);
  const albums = useSelector((state: RootState) => state.album);
  console.log(albums);
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
            <AlbumA album={albums} />
          </AlbumC>
        )}
      </Wrapper>
    </Container>
  );
}

export default ArtistDetail;
