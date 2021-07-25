import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    border-bottom: solid 0.1rem ${theme.colors.darkGray};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 8rem;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
`;
