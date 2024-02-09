import React, { FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchStart } from '../Redux/songSlice';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 700px) {
    margin-top: 70px;
  }
`;

const Top = styled.h4``;

const Form = styled.form``;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LAble = styled.label``;
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px 8px;
`;

const SubmitBody = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: end;
`;

const Submit = styled.button`
  padding: 6px;
`;

function AddSong() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    console.log('hy');
    console.log(title, artist, album, genre);
    const res = await axios.post('http://localhost:5000/api/song/create', {
      title,
      artist,
      album,
      genre,
    });
    if (res.status === 201) {
      dispatch(fetchStart());
      let x = '/';
      return (window.location.href = x);
    } else {
      return (window.location.href = 'http://localhost:3000/new');
    }
  };
  return (
    <Container>
      <Wrapper>
        <Top>Add your Song</Top>

        <Form onSubmit={handleClick}>
          <InputContainer>
            <LAble>Title</LAble>
            <Input
              placeholder="enter song title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <LAble>Title</LAble>
            <Input
              placeholder="enter song title"
              onChange={(e) => setArtist(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <LAble>Title</LAble>
            <Input
              placeholder="enter song title"
              onChange={(e) => setAlbum(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <LAble>Title</LAble>
            <Input
              placeholder="enter song title"
              onChange={(e) => setGenre(e.target.value)}
            />
          </InputContainer>
          <SubmitBody>
            <Submit type="submit">Submit</Submit>
          </SubmitBody>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default AddSong;
