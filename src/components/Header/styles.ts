import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    border-bottom: solid 0.1rem ${theme.colors.darkGray};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 8rem;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    height: 10rem;
  }
`;

export const Logo = styled.h1`
  text-transform: uppercase;
`;

export const Menu = styled.menu`
  ${({ theme }) => css`
    @media (max-width: 600px) {
      margin-top: ${theme.spacings.xsmall};
  `}
`;

export const MenuItem = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    border-bottom: solid 0.3rem transparent;
    transition: ${theme.transition.default};
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 1.5rem;
    }

    &:hover {
      border-bottom: solid 0.3rem ${theme.colors.white};
    }
  `}
`;
