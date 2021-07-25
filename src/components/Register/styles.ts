import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    padding-bottom: 10rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    text-align: center;
    font-size: ${theme.font.sizes.huge};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 40rem;
    padding: ${theme.spacings.medium};
    border: solid 0.1rem ${theme.colors.darkGray};
    border-radius: 0.4rem;

    @media (max-width: 900px) {
      &:last-child {
        margin-top: ${theme.spacings.medium};
      }
    }
  `}
`;

export const CardTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      width: 0.4rem;
      height: 2rem;
      margin-right: ${theme.spacings.xxsmall};
      background: ${theme.colors.blue};
    }
  `}
`;
