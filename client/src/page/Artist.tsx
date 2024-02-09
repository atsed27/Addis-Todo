import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchArtistStart } from '../Redux/songSlice';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`;
const Wrapper = styled.div``;
const ArtistBody = styled.div``;
const AllArtist = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const ArtistContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const HR = styled.hr``;
const ArtistInfo = styled.div``;

const ImageContainer = styled.div`
  margin-right: 14px;
`;
const Image = styled.img`
  height: 50%;
`;
const ArtistName = styled.h5`
  margin: 0px;
  font-size: 18px;
`;
const AlbumAndTrack = styled.p`
  margin: 0px;
`;

function Artist() {
  const artist = useSelector((state: RootState) => state.artist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtistStart());
  }, [dispatch]);

  return (
    <Container>
      <AllArtist>Artist : {artist.length} </AllArtist>
      <Wrapper>
        {artist.map((item) => (
          <ArtistBody key={item.artist}>
            <ArtistContainer>
              <ImageContainer>
                <Link to={`/artist/${item.artist}`}>
                  <Image
                    src="data:image/jpeg;base64,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"
                    alt="music cover"
                  />
                </Link>
              </ImageContainer>
              <ArtistInfo>
                <ArtistName>
                  <Link to={`/artist/${item.artist}`}> {item.artist} </Link>
                </ArtistName>
                <AlbumAndTrack>
                  <Link to={`/artist/${item.artist}`}>
                    {item.totalAlbum} Album | {item.totalSong} track
                  </Link>
                </AlbumAndTrack>
              </ArtistInfo>
            </ArtistContainer>
            <HR />
          </ArtistBody>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Artist;
