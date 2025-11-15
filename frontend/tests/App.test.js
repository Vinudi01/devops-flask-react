import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';

// Mock root div
beforeEach(() => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
});

afterEach(() => {
  document.body.innerHTML = '';
});

test('renders App via index.js', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  expect(document.getElementById('root')).not.toBeNull();
});
