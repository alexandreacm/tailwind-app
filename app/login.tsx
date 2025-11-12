import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import LogoTelus from './components/LogoTelus';

export default function LoginScreen() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar lógica de login aqui
    console.log('Login:', { email, password });
  };

  console.log('rendering...');

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className={`flex-1 px-6 py-12 ${theme.colors.background}`}>
          {/* Logo Telus */}
          <LogoTelus />

          {/* Formulário de Login */}
          <LoginForm
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          {/* Footer */}
          <Footer />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
