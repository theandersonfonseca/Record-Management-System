import { useState, FormEvent, ChangeEvent } from 'react';

import * as S from './styles';

type valuesType = {
  name: string;
  price: string;
  description: string;
  quantity: string;
};

const initialValues = {
  name: '',
  price: '',
  description: '',
  quantity: '',
};

export default function FormProduct() {
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

    localStorage.setItem('LOJA_TUDO_BARATO_PRODUTOS', JSON.stringify(values));

    setValues(initialValues);
    alert('Produto cadastrado com sucesso!');
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
          name='name'
          id='name'
        ></S.Input>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label htmlFor='description'>Descrição</S.Label>
        <S.Input
          type='text'
          value={values.description}
          onChange={(e) => handleSetValue(e, 'description')}
          name='description'
          id='description'
        ></S.Input>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label htmlFor='price'>Preço</S.Label>
        <S.Input
          type='number'
          value={values.price}
          onChange={(e) => handleSetValue(e, 'price')}
          name='price'
          id='price'
        ></S.Input>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label htmlFor='quantity'>Quantidade</S.Label>
        <S.Input
          type='number'
          value={values.quantity}
          onChange={(e) => handleSetValue(e, 'quantity')}
          name='quantity'
          id='quantity'
        ></S.Input>
      </S.InputWrapper>

      <S.Submit type='submit'>Cadastrar</S.Submit>
    </S.Wrapper>
  );
}
