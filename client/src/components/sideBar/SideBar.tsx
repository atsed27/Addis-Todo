import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: calc(100vh - 0px);
  background-color: rgb(251, 252, 252);
  position: fixed;
  top: 10px;
  width: 25%;
`;

const Wrapper = styled.div`
  color: #555;
`;
const SideBarMenu = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SideBarTitle = styled.h3`
  color: rgb(187, 186, 186);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SideBarList = styled.ul`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SideBarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(228, 228, 253);
  }
  &:active {
    background-color: rgb(228, 228, 253);
  }
`;

function SideBar() {
  return (
    <Container>
      <Wrapper>
        <SideBarMenu>
          <SideBarTitle>AdisMusic</SideBarTitle>
          <SideBarList>
            <SideBarListItem>Home</SideBarListItem>

            <SideBarListItem>Album</SideBarListItem>

            <SideBarListItem>Artist</SideBarListItem>
          </SideBarList>
        </SideBarMenu>
      </Wrapper>
    </Container>
  );
}

export default SideBar;
