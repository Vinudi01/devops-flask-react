/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock fetch globally
global.fetch = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Cleanup
    jest.restoreAllMocks();
  });

  test('renders React Frontend heading', () => {
    // Mock successful fetch
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ message: 'Hello from Flask backend!' }),
    });

    render(<App />);
    const heading = screen.getByText('React Frontend');
    expect(heading).toBeInTheDocument();
  });

  test('displays message from backend when fetch succeeds', async () => {
    const mockMessage = 'Hello from Flask backend!';
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ message: mockMessage }),
    });

    render(<App />);
    
    // Wait for the async fetch to complete
    await waitFor(() => {
      expect(screen.getByText(mockMessage)).toBeInTheDocument();
    });

    // Verify fetch was called with correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/hello')
    );
  });

  test('displays error message when backend is not available', async () => {
    // Mock failed fetch
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<App />);
    
    // Wait for error handling
    await waitFor(() => {
      expect(screen.getByText('Backend not available')).toBeInTheDocument();
    });
  });

  test('calls fetch with correct API URL', () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ message: 'Test message' }),
    });

    render(<App />);
    
    expect(global.fetch).toHaveBeenCalled();
    const fetchCall = global.fetch.mock.calls[0][0];
    expect(fetchCall).toContain('/api/hello');
  });

  test('handles JSON parsing error gracefully', async () => {
    // Mock response that fails to parse JSON
    global.fetch.mockResolvedValueOnce({
      json: async () => {
        throw new Error('Invalid JSON');
      },
    });

    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Backend not available')).toBeInTheDocument();
    });
  });
});

