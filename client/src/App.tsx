import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Album from './page/Album';
import SideBar from './components/sideBar/SideBar';
import styled from '@emotion/styled';
import NavBar from './components/NavBar';
import Artist from './page/Artist';
import AlbumDetail from './page/AlbumDetail';
import ArtistDetail from './page/ArtistDetail';
import AddSong from './page/AddSong';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
`;
const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Wrapper2 = styled.div`
  grid-column: span 3;
  @media only screen and (max-width: 600px) {
    grid-column: span 4;
  }
`;
const MobileMenu = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
const Wrapper3 = styled.div``;
const Wrapper4 = styled.div`
  height: 100vh;
`;
function App() {
  return (
    <Container>
      <Wrapper>
        <SideBar />
      </Wrapper>

      <Wrapper2>
        <Wrapper3>
          <Wrapper4>
            <BrowserRouter>
              {/** Mobile view */}
              <MobileMenu>
                <NavBar />
              </MobileMenu>

              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="/album" element={<Album />} />
                  <Route path="/artist" element={<Artist />} />
                  <Route path="/album/:id" element={<AlbumDetail />} />
                  <Route path="/artist/:id" element={<ArtistDetail />} />
                  <Route path="/new" element={<AddSong />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Wrapper4>
        </Wrapper3>
      </Wrapper2>
    </Container>
  );
}

export default App;
