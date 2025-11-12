import { DarkTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import React from 'react';
import LoadingScreen from './index';

// Mock theme for testing
const mockTheme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#E5E5E5',
    notification: '#FF3B30',
  },
};

describe('<LoadingScreen />', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider value={DarkTheme}>
        <LoadingScreen />
      </ThemeProvider>
    );
  });

  it('displays the correct text', () => {
    render(
      <ThemeProvider value={mockTheme as Theme}>
        <LoadingScreen />
      </ThemeProvider>
    );

    const textElement = screen.getByText('Animation...');
    expect(textElement).toBeTruthy();
  });
});
