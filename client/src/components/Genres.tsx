import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../Redux/store';
import { fetchGenreStart } from '../Redux/songSlice';

const Container = styled.div``;
const Wrapper = styled.div``;

const Total = styled.h4``;
const GenerContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const AlbumContainer = styled.div`
  margin-bottom: 20px;
`;

const AlbumTitle = styled.h5`
  margin: 0px;
  font-size: 18px;
`;
const Artist = styled.p`
  margin: 0px;
`;
type Props = {
  sort: string;
};
function Genres({ sort }: Props) {
  let genre: string;
  sort === 'AllGenre' ? (genre = 'All') : (genre = sort);
  const dispatch = useDispatch();
  const song = useSelector((state: RootState) => state.song);
  console.log(song);
  useEffect(() => {
    dispatch(fetchGenreStart(sort));
  }, [dispatch, sort]);
  return (
    <Container>
      <Wrapper>
        <Total>
          {genre}:{song.length}
        </Total>
        <GenerContainer>
          {song?.map((item) => (
            <AlbumContainer key={item._id}>
              <AlbumTitle>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/album/${item.album}`}
                >
                  {item.album}
                </Link>
              </AlbumTitle>

              <Artist>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/artist/${item.artist}`}
                >
                  {item.artist}
                </Link>
              </Artist>
            </AlbumContainer>
          ))}
        </GenerContainer>
      </Wrapper>
    </Container>
  );
}

export default Genres;
