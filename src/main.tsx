import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import './index.css'
import { UserProvider } from './contexts/user-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </React.StrictMode>
  </>
)
