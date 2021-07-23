import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 95rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
  `}
`;

export default Container;
