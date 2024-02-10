import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchStart } from '../Redux/songSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
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

type FormValues = {
  title: string;
  artist: string;
  album: string;
  genre: string;
};
function AddSong() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useDispatch();
  const handleClick: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    const res = await axios.post('http://localhost:5000/api/song/create', {
      title: data.title,
      artist: data.artist,
      album: data.album,
      genre: data.genre,
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

        <Form onSubmit={handleSubmit(handleClick)}>
          <InputContainer>
            <LAble>Title</LAble>
            <Input
              type="text"
              placeholder="enter song title"
              id="title"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && (
              <span style={{ color: 'red', marginBottom: '4px' }}>
                {errors.title.message}
              </span>
            )}
          </InputContainer>
          <InputContainer>
            <LAble>Artist</LAble>
            <Input
              placeholder="enter song Artist"
              id="artist"
              {...register('artist', { required: 'Artist is required' })}
            />
            {errors.artist && (
              <span style={{ color: 'red', marginBottom: '4px' }}>
                {errors.artist.message}
              </span>
            )}
          </InputContainer>
          <InputContainer>
            <LAble>Album</LAble>
            <Input
              placeholder="enter song Album"
              id="album"
              type="text"
              {...register('album', { required: 'Album is required' })}
            />
            {errors.album && (
              <span style={{ color: 'red', marginBottom: '4px' }}>
                {errors.album.message}
              </span>
            )}
          </InputContainer>
          <InputContainer>
            <LAble>Genre</LAble>
            <Input
              placeholder="enter song Genre"
              id="genre"
              type="text"
              {...register('genre', { required: 'Genre is required' })}
            />
            {errors.genre && (
              <span style={{ color: 'red', marginBottom: '4px' }}>
                {errors.genre.message}
              </span>
            )}
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
