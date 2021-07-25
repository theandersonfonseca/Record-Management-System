import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css``}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    &:first-child {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    margin-top: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: 0.4rem;
    border: solid 0.2rem transparent;

    &:focus {
      outline: none;
      border: solid 0.2rem ${theme.colors.blue};
    }
  `}
`;

export const Submit = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    padding: ${theme.spacings.xxsmall};
    text-transform: uppercase;
    background: ${theme.colors.white};
    color: ${theme.colors.darkGray};
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    transition: ${theme.transition.default};
    font-weight: ${theme.font.bold};

    &:hover {
      background: ${theme.colors.blue};
      color: ${theme.colors.white};
    }
  `}
`;
