import { telusTheme } from '@/app/styles/theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface LoginProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
}

const LoginForm: React.FC<LoginProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}) => {
  const theme = useTheme();

  return (
    <View className="flex-1 justify-center">
      <View className="mb-6">
        <Text
          className="mb-2 text-sm font-semibold"
          style={{
            fontFamily: telusTheme.fontFamily.InterBold,
            color: theme.colors.text,
          }}
        >
          Email ou Usuário
        </Text>
        <TextInput
          className="rounded-lg border px-4 py-3 text-base"
          placeholder="Digite seu email ou usuário"
          placeholderTextColor={theme.dark ? '#9CA3AF' : '#9CA3AF'}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
          style={{
            fontFamily: telusTheme.fontFamily.InterRegular,
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        />
      </View>

      <View className="mb-6">
        <Text
          className="mb-2 text-sm font-semibold"
          style={{
            fontFamily: telusTheme.fontFamily.InterBold,
            color: theme.colors.text,
          }}
        >
          Senha
        </Text>
        <TextInput
          className="rounded-lg border px-4 py-3 text-base"
          placeholder="Digite sua senha"
          placeholderTextColor={theme.dark ? '#9CA3AF' : '#9CA3AF'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          style={{
            fontFamily: telusTheme.fontFamily.InterRegular,
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        />
      </View>

      <TouchableOpacity
        className="mb-4 rounded-lg bg-telus-green py-4 shadow-md"
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text
          className="text-center text-lg font-bold text-white"
          style={{ fontFamily: 'Helvetica Neue' }}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center py-2">
        <Text
          className={`text-sm font-medium ${theme.dark ? 'text-telus-white' : 'text-telus-black'}`}
          style={{ fontFamily: telusTheme.fontFamily.InterRegular }}
        >
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
