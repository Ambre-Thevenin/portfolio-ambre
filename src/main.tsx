import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, #root {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }
    p {
      font-family: 'Poppins', sans-serif;
    } 
    h1, h2, h3 {
      font-family: 'Fraunces', serif;
    }
    
    * {
        box-sizing: border-box;
        
    }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);
