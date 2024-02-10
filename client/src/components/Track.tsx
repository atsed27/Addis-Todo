import React, { FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import { Song } from '../types/Task';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchStart } from '../Redux/songSlice';
import { Link } from 'react-router-dom';

const HR = styled.hr`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MainComponent = styled.div`
  margin: 0px 5px;
`;
const Track = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AllTrack = styled.h4``;
const Right = styled.div``;
const Add = styled.button`
  margin-right: 10px;
  font-size: 25px;
  border: none;
  font-weight: 600;
`;

const MusicContainer = styled.div`
  margin-bottom: 170px;
  background-color: gray;
  @media only screen and (max-width: 600px) {
    background-color: white;
  }
`;
const MusicCont = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    background-color: gray;
    width: 95%;
  }
`;

const Music = styled.div`
  width: 50%;
  margin-left: 20px;
`;
const MusicTitle = styled.h4`
  padding-top: 5px;
  margin: 0px;
  font-size: 18px;
`;
const Artist = styled.p`
  padding-top: 10px;
  margin: 0px;
`;
const Edit = styled.button``;
const Delete = styled.button``;

const UpdateContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  background-color: rgb(0 0 0 / 0.9);
  height: 100vh;
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const FormContainer = styled.div``;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h3``;
const InputContainer = styled.div`
  margin-bottom: 10px;
`;
const Texts = styled.h5`
  margin: 0px;
`;
const Input = styled.input`
  margin-top: 2px;
  padding: 4px 7px;
  font-size: 16px;
`;
const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const SubmitL = styled.button`
  padding: 3px 14px;
  margin-top: 3px;
  margin-right: 4px;
`;
const Submit = styled.button`
  padding: 3px 14px;
  margin-top: 3px;
`;
type Props = {
  song: Song[];
  update: (item: Song) => void;
};

function TrackM({ song, update }: Props) {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();
  //delete song
  const handleClick = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/song/delete/${id}`);
    dispatch(fetchStart());
  };
  const handleUpdate = (id: string, item: Song) => {
    setTitle(item.title);
    setArtist(item.artist);
    setAlbum(item.album);
    setGenre(item.genre);
    setEdit(!edit);
    setId(id);
  };

  const handleClickUpdate = async (e: FormEvent) => {
    e.preventDefault();
    update({ _id: id, title, artist, album, genre });
    setEdit(!edit);
  };

  return (
    <MainComponent>
      <HR />
      <Track>
        <Top>
          <AllTrack>All Track : {song.length} </AllTrack>
          <Right>
            <Add>
              <Link style={{ textDecoration: 'none' }} to="/new">
                +
              </Link>
            </Add>
          </Right>
        </Top>
        <MusicContainer>
          {song.map((item) => (
            <div key={item._id}>
              <MusicCont>
                <Music>
                  <MusicTitle>{item.title}</MusicTitle>
                  <Artist>{item.artist}</Artist>
                </Music>
                <Edit onClick={() => handleUpdate(item._id, item)}>update</Edit>
                <Delete onClick={() => handleClick(item._id)}>Delete</Delete>
                {edit && id === item._id && (
                  <UpdateContainer>
                    <Wrapper>
                      <FormContainer>
                        <Title>You can Update EveryThing</Title>
                        <Form onSubmit={handleClickUpdate}>
                          <InputContainer>
                            <Texts> Title: </Texts>
                            <Input
                              onChange={(e) => setTitle(e.target.value)}
                              autoFocus
                              value={title}
                            />
                          </InputContainer>
                          <InputContainer>
                            <Texts> Artist: </Texts>
                            <Input
                              onChange={(e) => setArtist(e.target.value)}
                              value={artist}
                            />
                          </InputContainer>
                          <InputContainer>
                            <Texts> Album: </Texts>
                            <Input
                              onChange={(e) => setAlbum(e.target.value)}
                              value={album}
                            />
                          </InputContainer>
                          <InputContainer>
                            <Texts> Genre: </Texts>
                            <Input
                              onChange={(e) => setGenre(e.target.value)}
                              value={genre}
                            />
                          </InputContainer>
                          <SubmitContainer>
                            <SubmitL onClick={() => setEdit(!edit)}>
                              Cancel
                            </SubmitL>
                            <Submit type="submit">Submit</Submit>
                          </SubmitContainer>
                        </Form>
                      </FormContainer>
                    </Wrapper>
                  </UpdateContainer>
                )}
              </MusicCont>
              <HR />
            </div>
          ))}
        </MusicContainer>
      </Track>
    </MainComponent>
  );
}

export default TrackM;
