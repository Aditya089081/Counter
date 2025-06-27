import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import Counter from './counter.jsx';
const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>
)