import { telusTheme } from '@/app/styles/theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const LogoTelus: React.FC = () => {
  const theme = useTheme();

  return (
    <View className="mb-12 mt-8 items-center">
      <View className="mb-4 rounded-lg bg-telus-green px-8 py-4">
        <Text
          className="text-4xl font-bold text-white"
          style={{ fontFamily: telusTheme.fontFamily.InterBold }}
        >
          TELUS
        </Text>
      </View>
      <Text
        className="mt-2 text-4xl font-semibold"
        style={{
          fontFamily: telusTheme.fontFamily.InterBold,
          color: theme.colors.text,
        }}
      >
        Bem-vindo
      </Text>
    </View>
  );
};

export default LogoTelus;
