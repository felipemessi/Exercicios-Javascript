import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../styles/Global'
import { Base } from '../styles/Base'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Base />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
