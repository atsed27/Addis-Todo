import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Album from './page/Album';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
