import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from '../components/Welcome';

describe('Welcome Component', () => {
  test('renders welcome message', () => {
    const { getByText, getByRole, getAllByText } = render(<Welcome />);
    
    // Check if the main heading is in the document
    const headingElement = getByRole('heading', { name: /Welcome to Our App/iu });
    expect(headingElement).toBeInTheDocument();

    // Check if the description text is in the document
    const descriptionText = getByText(/This is a starter template/iu);
    expect(descriptionText).toBeInTheDocument();

    // Check if the technology cards are in the document
    const reactTexts = getAllByText(/React/iu);
    expect(reactTexts.length).toBeGreaterThan(0);

    const typescriptTexts = getAllByText(/TypeScript/iu);
    expect(typescriptTexts.length).toBeGreaterThan(0);

    const tailwindTexts = getAllByText(/Tailwind CSS/iu);
    expect(tailwindTexts.length).toBeGreaterThan(0);

    // Check if the button is in the document
    const buttonElement = getByRole('button', { name: /Get Started/iu });
    expect(buttonElement).toBeInTheDocument();
  });
}); 