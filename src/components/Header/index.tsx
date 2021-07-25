import Container from 'components/Container';
import * as S from './styles';

export default function Header() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Logo>Loja Tudo Barato - Gestão</S.Logo>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
