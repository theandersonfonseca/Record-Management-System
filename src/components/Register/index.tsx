import * as S from './styles';

import Container from 'components/Container';
import FormClient from 'components/FormClient';
import FormProduct from 'components/FormProduct';

export default function Register() {
  return (
    <S.Wrapper>
      <Container>
        <S.Title>Área de Cadastro</S.Title>

        <S.Content>
          <S.Card>
            <S.CardTitle>Cadastre um Cliente</S.CardTitle>
            <FormClient />
          </S.Card>

          <S.Card>
            <S.CardTitle>Cadastre um Produto</S.CardTitle>
            <FormProduct />
          </S.Card>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
