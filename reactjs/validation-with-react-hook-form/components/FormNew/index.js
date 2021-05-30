import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Form from "../Form";
import Field from "../Field";
import Button from '../Button';

import { schema } from './validation'

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2,'O campo precisa ter no mínimo 2 caracters')
//     .required('O campo é obrigatório'),
//   email: yup.string().email().required('O campo é obrigatório'),
// })

const FormNew = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field.Text 
        label="Nome" 
        name="name" 
        type="text" 
        register={register}
      />
      <p>{errors.name?.message}</p>
      <Field.Text 
        label="Email" 
        name="email" 
        type="email" 
        register={register}
      />
      <p>{errors.email?.message}</p>

      <Button>Enviar</Button>
    </Form>
  )
}

export default FormNew