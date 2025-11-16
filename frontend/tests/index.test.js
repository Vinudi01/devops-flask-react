/**
 * @jest-environment jsdom
 */
import { createRoot } from 'react-dom/client';
import App from '../src/App';

// Mock react-dom/client
const mockRender = jest.fn();
const mockCreateRoot = jest.fn(() => ({
  render: mockRender,
}));

jest.mock('react-dom/client', () => ({
  createRoot: mockCreateRoot,
}));

describe('index.js', () => {
  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = '<div id="root"></div>';
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should render App component into root element', () => {
    // Import and execute index.js
    jest.isolateModules(() => {
      require('../src/index');
    });
    
    // Verify createRoot was called with root element
    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById('root'));
    
    // Verify render was called with App component
    expect(mockRender).toHaveBeenCalled();
  });

  test('root element exists in DOM', () => {
    const rootElement = document.getElementById('root');
    expect(rootElement).not.toBeNull();
    expect(rootElement.id).toBe('root');
  });
});

