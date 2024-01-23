import React from 'react';
import styled from '../styled';

export default function ComponentsInterpolationDemo() {
  return (
    <Wrapper>
      <TextWrapper>
        Components interpolation demo
        <Emoji>😅</Emoji>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;
  background-color: hsl(180deg 80% 40%);
  border-radius: 8px;
`;

const Emoji = styled.span`
  transition: transform 200ms;
  display: block;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 1.1rem;

  &:hover {
    color: hsl(350deg 100% 40%);
  }

  &:hover ${Emoji} {
    transform: scale(1.3);
  }
`;
