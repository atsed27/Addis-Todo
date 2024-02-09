export type Song = {
  _id: string;
  album: string;
  artist: string;
  genre: string;
  title: string;
};

export type Album = {
  album: string;
  artist: string;
};

export type Artist = {
  artist: string;
  totalAlbum: number;
  totalSong: number;
};
