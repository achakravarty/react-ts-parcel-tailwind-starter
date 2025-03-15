import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the Welcome component to simplify testing
jest.mock('../components/Welcome', () => {
  return function MockWelcome() {
    return <div data-testid="mock-welcome">Mocked Welcome Component</div>;
  };
});

describe('App Component', () => {
  test('renders the Welcome component', () => {
    const { getByTestId } = render(<App />);
    
    // Check if the Welcome component is rendered
    const welcomeComponent = getByTestId('mock-welcome');
    expect(welcomeComponent).toBeInTheDocument();
    expect(welcomeComponent.textContent).toBe('Mocked Welcome Component');
  });
}); 