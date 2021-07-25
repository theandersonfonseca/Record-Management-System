import { useState, FormEvent, ChangeEvent } from 'react';

import * as S from './styles';

type valuesType = {
  name: string;
  email: string;
  cpf: string;
  cep: string;
};

const initialValues = {
  name: '',
  email: '',
  cpf: '',
  cep: '',
};

export default function FormClient() {
  const [values, setValues] = useState<valuesType>(initialValues);

  function isEmpty(fields: string[]) {
    return fields.some((field) => field.trim().length === 0);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isEmpty(Object.values(values))) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    localStorage.setItem('LOJA_TUDO_BARATO_CLIENTES', JSON.stringify(values));

    setValues(initialValues);
    alert('Cliente cadastrado com sucesso!');
  }

  function handleSetValue(e: ChangeEvent<HTMLInputElement>, id: string) {
    setValues((s) => ({ ...s, [id]: e.target.value }));
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.Label htmlFor='name'>Nome</S.Label>
        <S.Input
          type='text'
          value={values.name}
          onChange={(e) => handleSetValue(e, 'name')}
          id='name'
        ></S.Input>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label htmlFor='email'>Email</S.Label>
        <S.Input
          type='email'
          value={values.email}
          onChange={(e) => handleSetValue(e, 'email')}
          name='email'
          id='email'
        ></S.Input>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label htmlFor='cpf'>CPF</S.Label>
        <S.Input
          type='number'
          value={values.cpf}
          onChange={(e) => handleSetValue(e, 'cpf')}
          name='cpf'
          id='cpf'
        ></S.Input>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label htmlFor='cep'>CEP</S.Label>
        <S.Input
          type='number'
          value={values.cep}
          onChange={(e) => handleSetValue(e, 'cep')}
          name='cep'
          id='cep'
        ></S.Input>
      </S.InputWrapper>

      <S.Submit type='submit'>Cadastrar</S.Submit>
    </S.Wrapper>
  );
}
