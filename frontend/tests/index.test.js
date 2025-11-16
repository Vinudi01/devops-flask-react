/**
 * @jest-environment jsdom
 */
import React from 'react';

// Create mock functions
const mockRender = jest.fn();
let mockCreateRoot;

// Mock react-dom/client
jest.mock('react-dom/client', () => {
  mockCreateRoot = jest.fn(() => ({
    render: mockRender,
  }));
  return {
    createRoot: mockCreateRoot,
  };
});

describe('index.js entry point', () => {
  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = '<div id="root"></div>';
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should create root and render App component', () => {
    // Dynamically import index.js to trigger execution
    jest.isolateModules(() => {
      // eslint-disable-next-line global-require
      require('../src/index');
    });
    
    // Verify createRoot was called with root element
    const rootElement = document.getElementById('root');
    expect(mockCreateRoot).toHaveBeenCalled();
    expect(mockCreateRoot).toHaveBeenCalledWith(rootElement);
    
    // Verify render was called
    expect(mockRender).toHaveBeenCalled();
  });

  test('root element should exist before rendering', () => {
    const rootElement = document.getElementById('root');
    expect(rootElement).not.toBeNull();
    expect(rootElement.id).toBe('root');
  });

  test('should handle missing root element gracefully', () => {
    document.body.innerHTML = '';
    
    jest.isolateModules(() => {
      // Should not throw, but createRoot will be called with null
      // eslint-disable-next-line global-require
      require('../src/index');
    });
    
    expect(mockCreateRoot).toHaveBeenCalled();
    expect(mockCreateRoot).toHaveBeenCalledWith(null);
  });
});


