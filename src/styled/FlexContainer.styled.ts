import styled from 'styled-components';

interface FlexContainerProps {
  direction?: 'row' | 'column';
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: 1rem;
  align-items: center;
`;
