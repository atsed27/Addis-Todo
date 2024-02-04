import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { space, color } from 'styled-system';

// Styled Components
const StyledButton = styled.button`
  /* Add Styled Components styles here */
  ${space}
  ${color}
`;

// Emotion styles
const customStyle: SerializedStyles = css`
  /* Add Emotion styles here */
  background-color: lightblue;
  border-radius: 4px;
`;

const Lam: React.FC = () => {
  return (
    <div>
      <StyledButton p={2} m={2} bg="blue" color="white">
        Styled Components
      </StyledButton>

      <button css={customStyle} style={{ margin: '8px' }}>
        Emotion
      </button>
    </div>
  );
};

export default Lam;
