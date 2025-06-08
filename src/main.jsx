import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';
import { store } from './app/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </StrictMode>,
)
