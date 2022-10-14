import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ToggleTheme: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
      isRound
      aria-label="Toggle Theme"
      size="lg"
      alignSelf="flex-end"
      onClick={toggleColorMode}
      data-testid="toggle-theme"
    />
  );
};
