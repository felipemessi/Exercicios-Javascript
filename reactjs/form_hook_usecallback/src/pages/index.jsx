import Form from '../components/Form'
import Input from '../components/Input'
import styles from '../styles/home.module.scss'

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Olá, mundo!')
  }


  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="email" />
        <Input name="password" />

        <button type="submit">Enviar</button>
      </Form>
    </div>
  )
}
