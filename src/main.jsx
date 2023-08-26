import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/global.scss'
import 'https://vjs.zencdn.net/7.20.2/video.min.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
)
