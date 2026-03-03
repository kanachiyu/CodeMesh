// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CodeMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CodeMesh/i);
    expect(titleElement).toBeInTheDocument();
});
