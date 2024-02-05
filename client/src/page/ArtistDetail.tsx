import React, { useState } from 'react';

import styled from '@emotion/styled';
import TrackM from '../components/Track';
import AlbumDetailComponents from '../components/AlbumDetailComponents';

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
const Album = styled.div``;
function ArtistDetail() {
  const [track, setTrack] = useState(true);
  const [album, setAlbum] = useState(false);

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
            <TrackM />
          </Track>
        )}
        {album && (
          <Album>
            <AlbumDetailComponents />
          </Album>
        )}
      </Wrapper>
    </Container>
  );
}

export default ArtistDetail;
