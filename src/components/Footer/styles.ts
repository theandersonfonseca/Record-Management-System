import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacings.xsmall};
    text-align: center;
    border-top: solid 0.1rem ${theme.colors.darkGray};
  `}
`;

export const Copyright = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
