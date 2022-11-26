import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { GLobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
          <GLobalStyle />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
