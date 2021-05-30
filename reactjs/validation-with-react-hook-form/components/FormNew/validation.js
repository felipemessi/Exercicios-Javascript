import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2,'O campo precisa ter no mínimo 2 caracters')
    .required('O campo é obrigatório'),
  email: yup.string().email().required('O campo é obrigatório'),
})