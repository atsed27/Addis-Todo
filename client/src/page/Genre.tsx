import styled from '@emotion/styled';
import React, { useState } from 'react';
import Genres from '../components/Genres';

const Container = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bottom = styled.div``;
const Select = styled.select`
  padding: 10px 20px;
  margin-right: 15px;
  margin-left: 10px;
  @media only screen and (max-width: 430px) {
    margin: 10px 0px;
  }
`;
const Option = styled.option``;
function Genre() {
  const [sort, setSort] = useState('AllGenre');
  return (
    <Container>
      <Wrapper>
        <Top>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="All">AllGenre</Option>
            <Option value="Pop">Pop</Option>
            <Option value="Hip hop ">Hip hop </Option>
            <Option value="Reggae">Reggae</Option>
            <Option value="Soul">Soul</Option>
            <Option value="Soul">Rock</Option>
          </Select>
        </Top>
        <Bottom>
          <Genres sort={sort} />
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Genre;
