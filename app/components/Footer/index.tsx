import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <View className="mb-4 mt-8 items-center">
      <Text
        className="text-xs"
        style={{
          fontFamily: 'Helvetica Neue',
          color: theme.colors.text,
          opacity: 0.6,
        }}
      >
        © 2024 TELUS. Todos os direitos reservados.
      </Text>
    </View>
  );
};

export default Footer;
