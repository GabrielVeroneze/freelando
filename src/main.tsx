import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global, ThemeProvider } from '@emotion/react'
import { theme } from '@/styles/theme'
import { global } from '@/styles/global'
import AppRoutes from '@/router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Global styles={global} />
            <AppRoutes />
        </ThemeProvider>
    </StrictMode>,
)
