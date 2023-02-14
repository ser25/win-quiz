import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import '../src/sass/libs/_suiet-wallet-kit-custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <WalletProvider>
          <App />
      </WalletProvider>
  </React.StrictMode>
);

