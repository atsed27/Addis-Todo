import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  background-color: rgb(251, 252, 252);
  position: fixed;
  bottom: 0px;
`;

const Wrapper = styled.div``;
const SideBarMenu = styled.div``;

const SideBarTitle = styled.h3``;

const SideBarList = styled.ul``;
const SideBarListItem = styled.li``;

function BottomBar() {
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

export default BottomBar;
